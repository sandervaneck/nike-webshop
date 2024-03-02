import React from "react";
import { styled } from "@mui/system";

export interface DotProps {
  active: boolean;
}

const Dot: React.FC<DotProps> = ({ active }) => {
  return (
    <span
      style={{
        padding: "0px 9px",
        margin: "0 5px",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: `${active ? "black" : "grey"}`,
      }}
    />
  );
};

const ImgContainer = styled("div")({
  alignSelf: "center",
});

interface DotsProps {
  mates: string[];
  index: number;
}

const Dots: React.FC<DotsProps> = ({ mates, index }) => {
  return (
    <ImgContainer>
      {mates.map((item, i) => (
        <Dot key={item} active={index === i} />
      ))}
    </ImgContainer>
  );
};

export default Dots;
