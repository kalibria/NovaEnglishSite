"use client"

import {Title2} from "@/app/components/titles/Title2";
import Image from "next/image";
import illustration1 from '../../../../public/assets/imgs/illustration1.svg'
import {FlexWrapper} from "@/app/components/wrapper/FlexWrapper";
import {Button} from "@/app/components/button/Button";
import iconGift from "../../../../public/assets/imgs/IconGift.svg";
import {S} from "./CheckEnglish_Styled"
import {Title3} from "@/app/components/titles/Title3";

export const CheckEnglishSection = () => {
    return (
        <S.CheckEnglish>
            <Title2>Проверь свой <br/> английский и получи <span>скидку на обучение!</span></Title2>
            <Title3>Наш тест поможет <br/> определить <span>ваш уровень и подобрать курс, идеально подходящий для ваших нужд.</span></Title3>
            <ul>
                <span>Как это работает:</span>
                <li>Пройдите тест, который займет около <span>15 минут</span></li>
                <li>Получите <span>мгновенный результат </span>с детальным анализом ваших сильных и слабых сторон.
                </li>
                <li>Исходя из резульатов, мы подберем курс, который <span>поможет вам достичь ваших целей </span> в
                    изучении английского.
                </li>
            </ul>
            <S.Highlighted>Проверьте свои знания прямо сейчас и станьте более конкурентоспособным в IT-мире!</S.Highlighted>
            <FlexWrapper justify={'center'} direction={'column'} align={'center'}>
                <Image src={illustration1} alt={"happy girl"} width={160} height={160}/>
                <Button>НАЧАТЬ ТЕСТ <Image src={iconGift} alt={"gift"} height={20} width={20}/></Button>
            </FlexWrapper>
        </S.CheckEnglish>
    )
}

