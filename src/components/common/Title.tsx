import { TitleWrapper } from "../../styles/styles";
import React from "react";

const Title :React.FC<{
  titleText: string
}> = ({ titleText }) => {
  return (
    <TitleWrapper className="title">
      <h3>{titleText}</h3>
    </TitleWrapper>
  );
};

export default Title;
