import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";

interface ArrowProps {
  direction: "left" | "right";
  handleClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, handleClick }) => {
  return (
    <Fab
      style={{
        backgroundColor: "unset",
        boxShadow: "unset",
        border: "1px solid",
      }}
      size="small"
      onClick={handleClick}
    >
      {direction === "right" ? <ArrowRight /> : <ArrowLeft />}
    </Fab>
  );
};

export default Arrow;
