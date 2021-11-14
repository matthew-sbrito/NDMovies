import styled from "styled-components";

interface ContainerProps{
  icon: string;
}

export const Container = styled.label<ContainerProps>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + div img {
      left: 30px;
      -webkit-transform: scale(0.7) rotate(1080deg);
      -ms-transform: scale(0.7) rotate(1080deg);
      transform: scale(0.7) rotate(1080deg);
    }
  }

  div {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    
    img {
      position: absolute;
      height: 40px;
      width: 40px;
      left: -13px;
      bottom: -15px;
      background: url(${props => props.icon});
      -webkit-transition: all ease 0.7s;
      transition: all ease 0.7s;
      -webkit-transform: scale(0.7);
      -ms-transform: scale(0.7);
      transform: scale(0.7);
    }
  }
`;
