import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  
  #handleLogin,
  #handleRegister{
    width: 150px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    background-color: #ee5454;
  }
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-top: -100px; */
  }
`;

export const InputContainer = styled.div`
 margin: 15px 0px;
 display: flex;
 flex-direction: column;
 label{

 }
 input{
   box-shadow: 5px 5px 10px 5px rgba(0,0,0,.1);
   border-radius: 7px;
   border: none;
   padding: 8px 10px;
   outline: none;
   width: 300px;
   font-size: 18px;
 }
`;

export const Title = styled.div`

`;