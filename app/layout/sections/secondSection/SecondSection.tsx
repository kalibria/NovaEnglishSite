"use client"

import {Title2} from "@/app/components/titles/Title2";
import Image from "next/image";
import image1 from "../../../../public/assets/imgs/01.svg";
import image2 from "../../../../public/assets/imgs/03.svg";
import image3 from "../../../../public/assets/imgs/02.svg";
import {Button} from "@/app/components/button/Button";
import theme from "@/app/styles/theme";
import {FlexWrapper} from "@/app/components/wrapper/FlexWrapper";
import {S} from "./SecondSection_Styled"

export const SecondSection = () => {
    return (
        <>
            <Title2>Твой путь к уверенному английскому в <span>Nova English</span></Title2>
            <S.Card>
                <Image src={image1} alt={"man is working at the computer"} width={159} height={141}/>
                <ul>
                    <li>Ты не получаешь интересных проектов и повышение, получает <S.Highlighted
                        color={theme.colors.colorTextNegative}>тот, кто знает
                        английский</S.Highlighted>
                    </li>
                    <li>У тебя <S.Highlighted color={theme.colors.colorTextNegative}>нет понимания
                        клиентов</S.Highlighted></li>
                    <li><S.Highlighted color={theme.colors.colorTextNegative}>Не успеваешь реагировать</S.Highlighted> в
                        диалоге или выражаешь свою мысль не так
                    </li>
                </ul>
            </S.Card>

            <S.Card>
                <Image src={image2} alt={"girl is working at the computer"} width={159} height={141}/>
                <ul>
                    <li>Постоянная неудовлетворенность и отсутствие <S.Highlighted
                        color={theme.colors.colorTextAccent}>уверенности в себе</S.Highlighted></li>
                    <li>Ты не можешь полноценно участвовать в <S.Highlighted color={theme.colors.colorTextAccent}>важных
                        обсуждениях </S.Highlighted></li>
                    <li>Пропускаешь <S.Highlighted color={theme.colors.colorTextAccent}>повышения по службе и
                        карьерный рост</S.Highlighted></li>
                </ul>
            </S.Card>

            <S.Card>
                <Image src={image3} alt={"happy man"} width={159} height={141}/>
                <ul>
                    <li>Продвинутая коммуникация<S.Highlighted color={theme.colors.colorTextAccent}>в профессиональной
                        среде</S.Highlighted></li>
                    <li>Фразы, которые <S.Highlighted color={theme.colors.colorTextAccent}>носители языка используют в
                        разговорной речи</S.Highlighted></li>
                    <li>Улучшение навыков<S.Highlighted color={theme.colors.colorTextAccent}>общения</S.Highlighted>
                    </li>
                    <li>Много <S.Highlighted color={theme.colors.colorTextAccent}>практики</S.Highlighted></li>
                </ul>
            </S.Card>
            <FlexWrapper justify={'center'}>
                <Button>Записаться</Button>
            </FlexWrapper>

        </>
    )
}


