import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
        --maxWidth: 1280px;
        /* --maxWidth: 800px; */
        --white: #fff;
        --black:  #d2d6dc;
        --lightDark: #374151;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --myGrey: #374151;
        --naughtyBrown: #501515c9;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --fontSuperSmall: 0.875rem;
    }

    * {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        /* font-family: 'Abel', sans-serif; */
        /* font-family: Arial, Helvetica, sans-serif; */
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        form {
             font-family: 'Abel', sans-serif;
        }

        p {
            font-size: 1rem;
            color: var(--white);
            /* color: var(--darkGrey); */
        }
    }
`;
