import styled from "styled-components";
import theme from "@/app/styles/theme";

const Header = styled.header`
    padding-top: 10px;
    
    & span{
        color: ${theme.colors.colorTextAccent};
        font-weight: 700;
        font-size: 16px;
    }
    
`

export const S = {
    Header
}