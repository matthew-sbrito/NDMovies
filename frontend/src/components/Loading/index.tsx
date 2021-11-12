import React from "react";

import { Container, Load } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Loading;
