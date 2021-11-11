import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
background-color: #111;

.image{
  height: 70vh;
  
  .shadow-vertical{
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 60%);
  }
  .shadow-horizontal{
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 10%, transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0 200px 35px;
  }
}

.input-box{
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div{
    margin-top: -100px;
    width: 400px;
    height: 50px;
    background-color: #fff;
    position: relative;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-shadow: 3px 3px 10px 3px rgba(255,255,255, .3);

    input{
      font-size: 20px;
      border: none;
      width: 90%;
      outline: none;
    }
    
    img{
      width: 40px;
      cursor: pointer;
    }
  }
}

`;