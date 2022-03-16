import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

export const Style = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body {
    background-color: ${theme.background.color};
}

`;
