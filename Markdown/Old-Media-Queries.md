**Gemini gave me a full block to replace my media queries to meet new requirements, so I am saving the old ones I was using here.**

/* Updated from Gemini's suggestions, see AI-Use.md*/
/*@media (min-width: 333px) {
    :root{
        --myBlue: #003D64;
    }
    header {
        gap: max(1.25vw, 4px);
    }
    header > a {
        flex-basis: max(18.75vw, 64px);
    }
    .headshot {
        border-radius: max(0.5vw, 2px) 0 0 max(0.5vw, 2px);
    }
    .titles h1,
    .titles h2 {
        margin-left: max(1.875vw, 6px);
    }
    #name {
        font-size: max(4.375vw, 16px);
    }
    #welcome {
        font-size: max(2.5vw, 10px);
    }
    nav ul {
        gap: max(1.25vw, 4px);
        padding: max(1.5vw, 8px);
        border-radius: max(0.625vw, 2px);
    }
    .navList {
        font-size: max(1.875vw, 9px);
    }
    button {
        border-radius: max(0.625vw, 2px);
        padding: max(0.3125vw, 2px) max(0.625vw, 4px);
    }
    nav button {
        font-size: max(1.875vw, 9px);
    }
    nav li {
        font-size: max(1.5625vw, 8px);
    }
    .personalLogo {
        margin-left: max(1.875vw, 6px);
        margin-right: max(1.875vw, 6px);
        font-size: max(6.25vw, 22px);
    }
}*/
@media (min-width: 666px) {
    /* Updated from Gemini's suggestions, see AI-Use.md*/
    :root {
        --myBlue: #003D64;
    }
    header {
        flex-direction: row;    /* Switches back to side-by-side row */
        flex-wrap: nowrap;
        text-align: left;
        gap: max(1.25vw, 4px);
        margin: 15px 50px;      /* Restores wider desktop margins */
        padding: 0 15px 0 0;    /* Restores flush-left headshot spacing */
    }
    header > a {
        width: auto;
        flex: 0 1 clamp(125px, 18.75vw, 300px);
    }
    .headshot {
        border-radius: clamp(3px, 0.5vw, 8px) 0 0 clamp(3px, 0.5vw, 8px);
    }
    .titles {
        align-items: flex-start;
        flex: 1 1 auto;
    }
    .titles h1,
    .titles h2 {
        margin-left: clamp(12px, 1.875vw, 30px);
    }
    #name {
        font-size: clamp(29px, 4.375vw, 70px);
    }
    #welcome {
        font-size: clamp(17px, 2.5vw, 40px);
    }
    nav {
        width: auto;
        margin-left: auto;
        margin-right: auto;
        flex: 0 1 auto;
    }
    nav ul {
        flex-direction: column; /* Restores vertical nav stack on desktop */
        gap: clamp(8px, 1.25vw, 20px);
        padding: clamp(16px, 1.5vw, 40px);
        border-radius: clamp(4px, 0.625vw, 10px);
    }
    .navList {
        font-size: clamp(12px, 1.875vw, 30px);
    }
    button {
        border-radius: clamp(4px, 0.625vw, 10px);
        padding: clamp(3px, 0.3125vw, 5px) clamp(6px, 0.625vw, 10px);
    }
    nav button {
        font-size: clamp(12px, 1.875vw, 30px);
    }
    nav li {
        font-size: clamp(10px, 1.5625vw, 25px);
    }
    .personalLogo {
        margin-left: clamp(12px, 1.875vw, 30px);
        margin-right: clamp(12px, 1.875vw, 30px);
        font-size: clamp(40px, 6.25vw, 100px);
    }
    /*:root{
        --myBlue: #003D64;
    }
    header {
        flex-direction: row;   
        flex-wrap: nowrap;
        text-align: left;
        gap: max(1.25vw, 4px);
        margin: 15px 50px;     
        padding: 0 15px 0 0;   
    }
     header > a {
        width: auto;
        flex: 0 1 clamp(125px, 18.75vw, 300px);
    }
    .headshot {
        border-radius: clamp(3px, 0.5vw, 8px) 0 0 clamp(3px, 0.5vw, 8px);
    }
    .titles h1,
    .titles h2 {
        margin-left: clamp(12px, 1.875vw, 30px);
    }
    #name {
        font-size: clamp(29px, 4.375vw, 70px);
    }
    #welcome {
        font-size: clamp(17px, 2.5vw, 40px);
    }
    nav ul {
        gap: clamp(8px, 1.25vw, 20px);
        padding: clamp(16px, 1.5vw, 40px);
        border-radius: clamp(4px, 0.625vw, 10px);
    }
    .navList {
        font-size: clamp(12px, 1.875vw, 30px);
    }
    button {
        border-radius: clamp(4px, 0.625vw, 10px);
        padding: clamp(3px, 0.3125vw, 5px) clamp(6px, 0.625vw, 10px);
    }
    nav button {
        font-size: clamp(12px, 1.875vw, 30px);
    }
    nav li {
        font-size: clamp(10px, 1.5625vw, 25px);
    }
    .personalLogo {
        margin-left: clamp(12px, 1.875vw, 30px);
        margin-right: clamp(12px, 1.875vw, 30px);
        font-size: clamp(42px, 6.25vw, 100px);
    }*/
}
@media (min-width: 666px) {
    :root{
        --myBlue: #0073BA;
    }
    .gallery {
        flex-direction: row;
    }
    .photo-card {
        width: auto;
    }
}
@media (min-width: 1601px) {
    header {
        gap: 20px;
    }
    header > a {
        flex-basis: 300px;
    }
    .headshot {
        height: 300px;
        border-radius: 8px 0 0 8px;
    }
    .titles h1,
    .titles h2 {
        margin-left: 30px;
    }
    #name {
        font-size: 70px;
    }
    #welcome {
        font-size: 40px;
    }
    nav ul {
        gap: 20px;
        padding: 30px;
        border-radius: 10px;
    }
    .navList {
        font-size: xx-large;
    }
    button {
        border-radius: 10px;
        padding: 5px 10px;
    }
    nav button {
        font-size: xx-large;
    }
    nav li {
        font-size: 25px;
    }
    nav ul {
        font-size: 40px;
    }
    .personalLogo {
        margin-left: auto;
        margin-right: auto;
        font-size: 100px;
    }
    nav {
        min-width: auto;
        margin-right: 125px;
    }
    .titles {
        min-width: auto;
    }
}
/*@media (max-width: 700px) {
    header {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 12px;
        padding: 12px;
    }
    header > a {
        grid-row: 1;
        justify-self: center;
        width: min(100%, 220px);
    }
    .titles {
        display: contents;
    }
    #name {
        grid-row: 2;
        margin: 0;
        text-align: center;
        font-size: clamp(28px, 8vw, 40px);
    }
    #welcome {
        grid-row: 3;
        margin: 0;
        text-align: center;
        font-size: clamp(16px, 4vw, 22px);
    }
    nav {
        grid-row: 4;
        justify-self: stretch;
        margin: 0;
    }
    nav ul {
        width: fit-content;
        margin: 0 auto;
        gap: 10px;
        padding: 12px 20px;
        border-radius: 10px;
    }
    .navList {
        font-size: 18px;
    }
    nav button {
        font-size: 18px;
    }
    nav li {
        font-size: 16px;
        margin-left: 0;
    }
    .headshot {
        border-radius: 8px;
    }
    .personalLogo {
        grid-row: 5;
        justify-self: center;
        margin: 0;
        font-size: clamp(36px, 10vw, 56px);
    }
}*/