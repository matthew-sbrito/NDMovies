import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  
  #handleLogin,
  #handleRegister{
    width: 200px;
    padding: 10px;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    background-color: #e50914;
    cursor: pointer;
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60%;
  }
`;

export const InputContainer = styled.div`
 margin: 35px 0px;
 display: flex;
 flex-direction: column;
 
 input{
   border: none;
   border-bottom: 2px solid #e50914;
   padding: 8px 10px;
   outline: none;
   width: 300px;
   font-size: 18px;
 }
`;

export const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;