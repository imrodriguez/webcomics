import React from 'react'
import {
    ThemeProvider,
    createGlobalStyle
} from "styled-components"

const theme = {
    colors: {
        primary: "#222831",
        secondary: "#00b8a9",
        alternative: "#f6416c",
        background: "#ffde7d"
    },
    font: "Fira Sans",
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: ${theme.colors.background};
    }
`

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
)

export default Theme