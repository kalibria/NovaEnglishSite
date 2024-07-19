"use client"

import Image from "next/image";
import logo from "../../../public/assets/imgs/logo.svg";
import s from "./Header.module.css"
import {Container} from "@/app/components/container/Container";
import {S} from "./MyHeader_Styled"
import {FlexWrapper} from "@/app/components/wrapper/FlexWrapper";

export const Header = () => {
    return (
        <S.Header className={s.header}>
            <Container>
                <FlexWrapper align={'center'} gap={'5px'}>
                    <Image src={logo} alt={'logo'} width={32} height={32}/>
                    <span>NOVA ENGLISH</span>
                </FlexWrapper>
            </Container>

        </S.Header>
    )
}

