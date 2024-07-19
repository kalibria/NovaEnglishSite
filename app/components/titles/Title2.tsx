import styled from "styled-components";
import {font} from "@/app/styles/Common";
import theme from "@/app/styles/theme";

export const Title2 = styled.h2`
    ${font({weight: 600, lineHeight:1.3, Fmin: 24, Fmax:48, color: theme.colors.colorTextPrimary})};
    text-align: center;
    margin-bottom: 28px;
    
    & span {
        ${font({weight: 600, Fmin: 24, Fmax:48, color: theme.colors.colorTextAccent})};
    }
`