import { getCloudflareContext } from "@opennextjs/cloudflare";

interface EmailSendResult {
  messageId: string;
}

interface SendEmailBinding {
  send(message: {
    to: string;
    from: string;
    subject: string;
    text: string;
    replyTo?: string;
  }): Promise<EmailSendResult>;
}

export interface AppCloudflareEnv {
  ANTHROPIC_API_KEY?: string;
  ANTHROPIC_MODEL?: string;
  ANTHROPIC_WORKSPACE_ID?: string;
  CONTACT_EMAIL?: SendEmailBinding;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
}

export async function getAppEnv(): Promise<AppCloudflareEnv> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const cloudflareEnv = env as unknown as AppCloudflareEnv;
    return {
      ...cloudflareEnv,
      ANTHROPIC_API_KEY: cloudflareEnv.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY,
      ANTHROPIC_MODEL: cloudflareEnv.ANTHROPIC_MODEL || process.env.ANTHROPIC_MODEL,
      ANTHROPIC_WORKSPACE_ID: cloudflareEnv.ANTHROPIC_WORKSPACE_ID || process.env.ANTHROPIC_WORKSPACE_ID,
      CONTACT_EMAIL_TO: cloudflareEnv.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL_TO,
      CONTACT_EMAIL_FROM: cloudflareEnv.CONTACT_EMAIL_FROM || process.env.CONTACT_EMAIL_FROM,
    };
  } catch {
    return {
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
      ANTHROPIC_MODEL: process.env.ANTHROPIC_MODEL,
      ANTHROPIC_WORKSPACE_ID: process.env.ANTHROPIC_WORKSPACE_ID,
      CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
      CONTACT_EMAIL_FROM: process.env.CONTACT_EMAIL_FROM,
    };
  }
}
