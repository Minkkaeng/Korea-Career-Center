"use client";

import dynamic from "next/dynamic";

const ApprovedDesignApp = dynamic(() => import("./ApprovedDesignApp"), {
  ssr: false,
});

export function ApprovedDesignHost() {
  return <ApprovedDesignApp />;
}
