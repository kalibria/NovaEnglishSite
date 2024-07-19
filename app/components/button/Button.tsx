import styled from "styled-components";
import theme from "@/app/styles/theme";
import {font} from "@/app/styles/Common";

export const Button = styled.button`
    border-radius: 32px;
    border: none;
    background-color: ${theme.colors.buttonPrimary};
    text-transform: uppercase;
    ${font({weight: 700, color: theme.colors.colorBg, Fmin: 20, Fmax: 24})};
    padding: 14px 40px;
`