import styles from "./page.module.css";
import MainSection from "@/app/layout/sections/mainSection/MainSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection/>
    </main>
  );
}
