import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --bg-color: #111317;
        --cards-bg-color: #1f2125;
        --cards-hover-color: #35373b;
        --contrast-color: #f9ac54;
        --contrast-hover-color: #d79447;
        --text-color: #d1d5db;
        --title-color: #ffffff;

        --main-font: 'Arial', sans-serif;
    }

    body{
        font-family: var(--main-font);
        background-color: var(--bg-color);
    }

    h1, h2, h3, li{
        color: var(--title-color);
    }

    p{
        color: var(--text-color);
    }
    a {
        text-decoration: none;
        color: var(--title-color);
    }
    li {
    list-style-type: none; 
    padding: 0;
    margin: 0;
}


`;
