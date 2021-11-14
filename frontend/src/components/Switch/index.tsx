import React from "react";

import { Container } from "./styles";

interface ISwitchProps{
  checked: boolean;
  change(): void;
  icon: string;
}

const Switch: React.FC<ISwitchProps> = ({ checked, change, icon }) => {

  return (
    <Container className="switch-theme" icon={icon}>
      <input
        type="checkbox"
        checked={checked}
        name="switch"
        onChange={change}
      />
      <div>
        <img src={icon} alt="switchIcon" />
      </div>
    </Container>
  );
};

export default Switch;
