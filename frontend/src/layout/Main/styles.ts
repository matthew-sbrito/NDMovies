import styled from "styled-components";

export const Template = styled.div`
  /* width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
  overflow-x: hidden;
  */
  
  *{
    font-family: sans-serif;
  }
`;

export const ContentMain = styled.main`
  grid-area: Main;
`;
