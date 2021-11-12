import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 99vw;
  inset: 0;
  background-color: rgba(0,0,0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity ease-in-out 500ms;
  z-index: 1000;

  &.show{
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Modal = styled.div`
  height: 600px;
  width: 1200px;
  background-color: #111;
  border-radius: 8px;
  position: relative;

  .close{
    width: 30px;
    height: 30px;
    border-radius: 10px;
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #f30000;
    color: #f30000;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 75%;
      cursor: pointer;
    }

  }
  .item{
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .img-current {
      box-shadow: 4px 4px 10px 4px rgba(255,255,255, 0.1);

      img{
      height: 550px;
      width: 340px;
    }
    }
  }
 
 .content{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center; 
   height: 100%;
   width: 70%;
   padding: 40px;

  .infos{
    color: #fff;

    .title,
    .description{
      margin: 10px;
    }
    .description{
      font-size: 20px;
    }
  }

  .button-catalogar{
    button, a{
      padding: 15px;
      border: none;
      color: #111;
      background-color: #fff;
      min-width: 250px;
      font-weight: bold;
      font-size: 18px;
      text-decoration: none;
      cursor: pointer;
    }
    a{
      padding: 15px 70px;
    }
  }
 }
`;