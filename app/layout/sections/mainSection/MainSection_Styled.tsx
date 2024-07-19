import styled from "styled-components";
import theme from "@/app/styles/theme";
import {font} from "@/app/styles/Common";

const MainSection = styled.section`
    border-radius: 20px;
    background-image: ${theme.colors.colorGradient};
    text-align: center;
    
    & p:first-of-type{
        margin-bottom: 65px;
    }
    
    
    & button {
        margin-top: 15px;
    }
`

const Subtitle = styled.span`
    text-transform: uppercase;

    ${font({weight: 700, color: theme.colors.colorTextTertiaru, Fmin: 14, Fmax: 20})}
`

const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 20px;
    ${font({weight: 700, color: theme.colors.colorTextAccent, Fmin: 28, Fmax: 64, lineHeight: 0.5})}

    & span {
        text-transform: none;
        ${font({weight: 700, color: theme.colors.colorTextPrimary, Fmin: 28, Fmax: 64})}
    }
`

const Text = styled.p`
    
    
    & span {
        text-transform: none;
        ${font({weight: 700, color: theme.colors.colorTextAccent, Fmin: 16, Fmax: 24})}
    }
    
    :last-of-type > span {
        text-transform: none;
        ${font({weight: 700, color: theme.colors.colorTextAccent, Fmin: 16, Fmax: 24})};
    }
`

export const S = {
    MainSection,
    Subtitle,
    Title,
    Text
}