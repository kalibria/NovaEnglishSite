import styled from "styled-components";
import theme from "@/app/styles/theme";
import {font} from "@/app/styles/Common";

const CheckEnglish = styled.section`
    border-radius: 20px;
    background-image: ${theme.colors.colorGradient};
    
    & img {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    & button {
        margin-bottom: 20px;
    }
    
    & button > img {
        margin: 0;
    }
    
    & ul {
        margin-bottom: 28px;
    }
   

    & ul > span {
        ${font({weight: 700, Fmin: 16, Fmax: 24})};
    }

    & ul > li:first-of-type {
        margin-top: 12px;
    }

    & li > span {
        font-weight: 700;
    }
`

const Highlighted = styled.span`
    ${font({weight: 700, Fmin: 16, Fmax: 24})};
    
`

export const S = {
    CheckEnglish,
    Highlighted
}