import styled from "styled-components";
import {font} from "@/app/styles/Common";
import theme from "@/app/styles/theme";

export const Title3 = styled.h3`
    ${font({weight: 500, lineHeight:1.3, Fmin: 20, Fmax:40, color: theme.colors.colorTextPrimary})};
    text-align: center;
    margin-bottom: 28px;
    
    & span {
        ${font({weight: 500, Fmin: 20, Fmax:40, color: theme.colors.colorTextAccent})};
    }
`