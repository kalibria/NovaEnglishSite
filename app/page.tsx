import styles from "./page.module.css";
import MainSection from "@/app/layout/sections/mainSection/MainSection";
import {SecondSection} from "@/app/layout/sections/secondSection/SecondSection";

export default function Home() {
    return (
        <main className={styles.main}>
            <MainSection/>
            <SecondSection/>
        </main>
    );
}
