import Image from "next/image";
import logo from "../../assets/imgs/logo.svg";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <Image src={logo} alt={'logo'} width={32} height={32}/>
            <span>NOVA ENGLISH</span>
        </header>
    )
}