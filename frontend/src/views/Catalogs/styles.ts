import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #222;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title-content{
    position: absolute;
    top: 100px;
    left: 30px;
    color: #fff;
    h1{
      font-size: 25px;
    }
  }
`;
