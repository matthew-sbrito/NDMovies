import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  width: 100vw;
  height: 100vh;

  .link-auth {
    position: absolute;
    top: 25px;
    right: 25px;
    padding: 10px 12px;
    background-color: #e50914;
    border-radius: 5px;
    text-decoration: none;
    color: #eee;
    font-weight: bold;
    min-width: 120px;
    text-align: center;
    opacity: 0.7;
    transition: all ease-in-out 500ms;
  }
  
  .link-auth:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-top: 5px solid #e50914;
  height: 550px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Title = styled.div`
  position: absolute;
  top: 20px;
  font-size: 50px;
  color: #eee;
`;


