'use client';

import React from "react";
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/app/styles/theme";
import GlobalStyles from "@/app/styles/GlobalStyles";



const Providers = (props: React.PropsWithChildren) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default Providers