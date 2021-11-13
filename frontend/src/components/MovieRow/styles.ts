import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 20px;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .movie-item{
    display: inline-block;
    transform: scale(0.85);
    cursor: pointer;
    transition: all ease-in-out 500ms;

    &:hover{
      transform: scale(1);
    }
    .image-item{
      img{
        height: 300px;
        width: 200px;
      }
    }
    .title{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
