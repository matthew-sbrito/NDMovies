import styled from "styled-components";

export const Container = styled.div`
  min-height: 130vh;
  background-color: #111;

  .more-info {
    position: absolute;
    cursor: pointer;
    top: 100px;
    right: 50px;
    img {
      width: 50px;
    }
  }

  .input-box {
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 500ms;

    &.search {
        margin-top: -400px;
    }
    form {
      margin-top: -300px;
      width: 400px;
      height: 50px;
      background-color: #fff;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      box-shadow: 3px 3px 10px 3px rgba(255, 255, 255, 0.3);

      input {
        font-size: 20px;
        border: none;
        width: 90%;
        outline: none;
      }

      img {
        width: 40px;
        cursor: pointer;
      }
    }
  }
`;
