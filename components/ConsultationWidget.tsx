"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./ConsultationWidget.module.css";

export function ConsultationWidget(){
 const [open,setOpen]=useState(false);
 return <div className={styles.wrap}>
  {open&&<section className={styles.panel} role="dialog" aria-label="상담 안내">
    <button className={styles.close} onClick={()=>setOpen(false)} aria-label="상담 안내 닫기">×</button>
    <span className={styles.badge}>CARE CONNECT</span><h2>어떤 도움이<br/>필요하신가요?</h2><p>원하시는 상담 방식을 선택해주세요.<br/>외부 상담 채널은 연결 준비 중입니다.</p>
    <div className={styles.channels} aria-label="외부 상담 채널">
      <button type="button" disabled><i className={styles.kakao}>K</i><span>카카오 상담<small>채널 연결 준비 중</small></span></button>
      <button type="button" disabled><i className={styles.naver}>N</i><span>네이버 상담<small>채널 연결 준비 중</small></span></button>
    </div>
    <div className={styles.internal}><Link href="/apply">온라인 상담신청 <b>→</b></Link><Link href="/apply?type=education">교육 문의 <b>→</b></Link></div>
  </section>}
  <button className={styles.fab} onClick={()=>setOpen(!open)} aria-expanded={open}><span aria-hidden="true">{open?"×":"✦"}</span><b>{open?"닫기":"상담"}</b></button>
 </div>
}
