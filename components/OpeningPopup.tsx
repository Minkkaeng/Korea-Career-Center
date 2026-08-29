"use client";
import Link from "next/link";
import { useEffect,useState } from "react";
import { openingNotice } from "@/content/home";
import styles from "./OpeningPopup.module.css";
export function OpeningPopup(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{const timer=window.setTimeout(()=>{if(!sessionStorage.getItem("opening-notice-closed"))setOpen(true)},0);return()=>window.clearTimeout(timer)},[]);
 if(!open)return null;
 const close=()=>{sessionStorage.setItem("opening-notice-closed","1");setOpen(false)};
 return <div className={styles.backdrop}><section className={styles.popup} role="dialog" aria-modal="true" aria-labelledby="opening-title"><div className={styles.visual}><span>NEW</span><p>2026</p><b>한국진로커리어센터<br/>홈페이지 OPEN</b></div><div className={styles.content}><button onClick={close} aria-label="팝업 닫기">×</button><span>NOTICE</span><h2 id="opening-title">{openingNotice.title}</h2><div className={styles.scroll}>{openingNotice.paragraphs.map(p=><p key={p}>{p}</p>)}</div><Link href="/news" onClick={close}>공지사항에서 자세히 보기 →</Link></div></section></div>
}
