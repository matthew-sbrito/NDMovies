import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  width: 100vw;
  height: 100vh;
  * {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  }
  .link-auth {
    position: absolute;
    top: 25px;
    right: 25px;
    padding: 10px 15px;
    background-color: #e50914;
    border-radius: 5px;
    text-decoration: none;
    color: #eee;
    font-weight: bold;
    min-width: 150px;
    text-align: center;
    opacity: 0.8;
    transition: all ease-in-out 500ms;
  }
  
  .link-auth:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: fixed;
  width: 40%;
  right: 0;
  height: 100%;
  background-color: #eee;
  box-shadow: 5px 0px 15px 5px rgba(255,255,255,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
 
  @media(max-width: 1000px) {
   &{
     width: 100%;
   }
  }
`;

export const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 50px;
  color: #eee;
`;


