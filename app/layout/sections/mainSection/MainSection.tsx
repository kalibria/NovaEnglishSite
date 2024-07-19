"use client"

import {Container} from "@/app/components/container/Container";
import Image from "next/image";
import mainImage from "../../../../public/assets/imgs/mainPage.svg"
import {Button} from "@/app/components/button/Button";
import {S} from './MainSection_Styled'

export default function MainSection() {
    return (
        <S.MainSection>
            <Container>
                <S.Subtitle>Beginner  — Upper-Intermediate</S.Subtitle>
                <S.Title>Английский для IT <span>Онлайн курсы</span></S.Title>
                <S.Text>Научим уверенно проходить интервью и работать в международных проектах</S.Text>
                <S.Text>Дата начала курса:<span> 21 декабря 2024</span></S.Text>
                <Image src={mainImage} alt={"woman and man learn English"} width={192} height={221}/>
                <Button>Хочу учиться</Button>
            </Container>
        </S.MainSection>

    )
}
