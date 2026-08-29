import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import styles from "./SiteFooter.module.css";

const programLinks = [
  ["청년 취업역량강화과정", "/programs/youth-employment"],
  ["AI 활용 진로상담", "/programs/ai-career-counseling"],
  ["기업 채용 컨설팅", "/programs/corporate-recruiting"],
  ["특강·위탁교육", "/programs/commissioned-education"],
] as const;

export function SiteFooter() {
  return <footer className={styles.footer}>
    <div className={styles.glow} aria-hidden="true" />
    <div className={styles.inner}>
      <div className={styles.callout}>
        <div><span>NEXT CAREER, TOGETHER</span><h2>당신의 다음 가능성을<br />함께 찾아갑니다.</h2></div>
        <Link href="/apply">상담·교육 문의하기 <b aria-hidden="true">↗</b></Link>
      </div>
      <div className={styles.mainGrid}>
        <section className={styles.brandArea} aria-label="센터 정보">
          <Link className={styles.brand} href="/" aria-label={`${siteConfig.name} 홈`}>
            <Image className={styles.logo} src="/images/logo-kc.png" alt="" width={740} height={873} />
            <span><b>한국진로</b><small>커리어센터</small></span>
          </Link>
          <p>AI 시대의 진로 탐색부터 취업 연결까지,<br />사람의 가능성을 중심에 두고 함께합니다.</p>
          <div className={styles.pendingInfo}><span>CONTACT</span><p>주소·대표번호·이메일 정보는 준비 중입니다.</p></div>
        </section>
        <nav className={styles.linkGroup} aria-label="푸터 주요 메뉴"><h3>센터 안내</h3><Link href="/center">센터소개</Link><Link href="/organization">조직도</Link><Link href="/partners">협력기관</Link><Link href="/news">공지사항·소식</Link><Link href="/contact">오시는 길·문의</Link></nav>
        <nav className={styles.linkGroup} aria-label="푸터 프로그램 메뉴"><h3>프로그램</h3>{programLinks.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
        <section className={styles.channelArea}><h3>빠른 상담</h3><p>상담 채널은 연결 준비 중입니다.</p><div><span className={styles.kakao}><i>K</i> 카카오 상담 <small>준비 중</small></span><span className={styles.naver}><i>N</i> 네이버 상담 <small>준비 중</small></span></div></section>
      </div>
      <div className={styles.legal}><p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p><div><span>개인정보처리방침 준비 중</span><span>이용약관 준비 중</span></div><Link href="#main-content">맨 위로 ↑</Link></div>
    </div>
  </footer>;
}
