import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;

  .title{
    font-size: 25px;
    font-weight: bold;
    color: #fff;
  }
  nav ul{
    list-style: none;
    display: flex;
    
    li{
      a{
        padding: 25px;
        font-weight: bold;
        margin: 10px;
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .btn-action button{
    padding: 5px 15px;
    width: 100px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 15px;
    border: 2px solid #fff;
    background-color: transparent;
    cursor: pointer;
    transition: all ease-in-out 500ms;
    color: #fff;

    &:hover{
      color: #000;
      background-color: #fff;
    }
  }
`;
