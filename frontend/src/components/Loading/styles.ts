import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

`;

export const Load = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    animation: rotation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  div:nth-child(1) {
    animation-delay: -0.040s;
  }
  div:nth-child(2) {
    animation-delay: -0.080s;
  }
  div:nth-child(3) {
    animation-delay: -0.120s;
  }
  div:nth-child(4) {
    animation-delay: -0.160s;
  }
  div:nth-child(5) {
    animation-delay: -0.200s;
  }
  div:nth-child(6) {
    animation-delay: -0.240s;
  }
  div:nth-child(7) {
    animation-delay: -0.280s;
  }
  div:nth-child(8) {
    animation-delay: -0.320s;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
