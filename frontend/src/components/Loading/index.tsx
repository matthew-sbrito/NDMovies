import React from "react";

import { Container, Load } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <SmallLoading />
    </Container>
  );
};

export const SmallLoading: React.FC = () => {
  return (
    <Load>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Load>
  );
};

export default Loading;
