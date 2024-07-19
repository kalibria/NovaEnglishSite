import styles from "./page.module.css";
import MainSection from "@/app/layout/sections/mainSection/MainSection";
import {SecondSection} from "@/app/layout/sections/secondSection/SecondSection";
import {CheckEnglishSection} from "@/app/layout/sections/checkEnglishSection/CheckEnglishSection";

export default function Home() {
    return (
        <main className={styles.main}>
            <MainSection/>
            <SecondSection/>
            <CheckEnglishSection/>
        </main>
    );
}
