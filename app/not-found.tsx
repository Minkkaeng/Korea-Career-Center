import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <section className={styles.notFound}>
        <h1>페이지를 찾을 수 없습니다</h1>
        <p>주소를 다시 확인하거나 홈으로 이동해 주세요.</p>
        <Link href="/">홈으로 이동</Link>
      </section>
    </main>
  );
}
