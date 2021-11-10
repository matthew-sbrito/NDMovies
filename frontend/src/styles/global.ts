import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans Condensed";
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

`;

export const Template = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props: any) => props.theme.colors.background};
  color: ${(props: any) => props.theme.colors.text};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
  overflow-x: hidden;

  header {
    grid-area: Header;
    background-color: ${(props: any) => props.theme.colors.primary};
  }

  main {
    grid-area: Main;
  }

  footer {
    grid-area: Footer;
    background-color: ${(props: any) => props.theme.colors.primary};
  }
`;