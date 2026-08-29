"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/site.config";
import styles from "./SiteHeader.module.css";

type MenuName = "center" | "programs" | null;
const programs = [
  { number:"01", title:"청년 취업역량강화과정", meta:"청년·구직자", href:"/programs/youth-employment" },
  { number:"02", title:"AI 활용 진로상담", meta:"Job Care형 상담", href:"/programs/ai-career-counseling" },
  { number:"03", title:"기업 채용 컨설팅", meta:"기업 담당자", href:"/programs/corporate-recruiting" },
  { number:"04", title:"특강·위탁교육", meta:"대학·공공기관", href:"/programs/commissioned-education" },
] as const;

export function SiteHeader() {
  const [mobileOpen,setMobileOpen]=useState(false);
  const [expanded,setExpanded]=useState<MenuName>(null);
  const pathname=usePathname();
  const closeAll=()=>{setMobileOpen(false);setExpanded(null)};
  const toggle=(menu:Exclude<MenuName,null>)=>setExpanded(expanded===menu?null:menu);

  return <header className={styles.header} onKeyDown={(event)=>{if(event.key==="Escape")setExpanded(null)}}>
    <div className={styles.inner}>
      <Link className={styles.brand} href="/" aria-label={`${siteConfig.name} 홈`} onClick={closeAll}>
        <Image className={styles.logo} src="/images/logo-kc.png" alt="" width={740} height={873} priority />
        <span><b>한국진로</b><small>커리어센터</small></span>
      </Link>
      <button className={styles.menuButton} type="button" aria-label="메뉴 열기" aria-expanded={mobileOpen} onClick={()=>setMobileOpen(!mobileOpen)}><span/><span/><span/></button>
      <nav className={`${styles.nav} ${mobileOpen?styles.open:""}`} aria-label="주요 메뉴">
        <ul className={styles.navList}>
          <li className={`${styles.dropdown} ${expanded==="center"?styles.expanded:""}`}>
            <button className={pathname==="/center"||pathname==="/organization"?styles.active:""} type="button" aria-expanded={expanded==="center"} onClick={()=>toggle("center")}>센터 안내 <span aria-hidden="true">⌄</span></button>
            <div className={`${styles.dropdownPanel} ${styles.centerPanel}`}>
              <div className={styles.panelIntro}><small>ABOUT KJCC</small><strong>센터를 소개합니다</strong><p>한국진로커리어센터의 역할과 조직을 확인하세요.</p></div>
              <div className={styles.centerLinks}><Link href="/center" onClick={closeAll}><i>01</i><span><b>센터소개</b><small>센터의 방향과 핵심 가치를 안내합니다.</small></span><em>→</em></Link><Link href="/organization" onClick={closeAll}><i>02</i><span><b>조직도</b><small>조직 구성과 담당 업무를 안내합니다.</small></span><em>→</em></Link></div>
            </div>
          </li>
          <li className={`${styles.dropdown} ${expanded==="programs"?styles.expanded:""}`}>
            <button className={pathname.startsWith("/programs")?styles.active:""} type="button" aria-expanded={expanded==="programs"} onClick={()=>toggle("programs")}>프로그램 <span aria-hidden="true">⌄</span></button>
            <div className={`${styles.dropdownPanel} ${styles.programPanel}`}>
              <div className={styles.panelHeader}><div><small>CAREER PROGRAMS</small><strong>나에게 필요한 프로그램 찾기</strong></div><Link href="/programs" onClick={closeAll}>전체 프로그램 →</Link></div>
              <div className={styles.programLinks}>{programs.map(program=><Link key={program.href} href={program.href} onClick={closeAll}><i>{program.number}</i><span><small>{program.meta}</small><b>{program.title}</b></span><em>↗</em></Link>)}</div>
            </div>
          </li>
          <li><Link className={pathname==="/partners"?styles.active:""} href="/partners" onClick={closeAll}>협력기관</Link></li>
          <li><Link className={pathname==="/news"?styles.active:""} href="/news" onClick={closeAll}>공지·소식</Link></li>
          <li><Link className={pathname==="/contact"?styles.active:""} href="/contact" onClick={closeAll}>오시는 길</Link></li>
        </ul>
        <Link onClick={closeAll} className={styles.cta} href="/apply">상담·교육 신청 <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </header>;
}
