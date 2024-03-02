import React from "react";
import { Card, CardMedia } from "@mui/material";

const CarouselSlide = ({ img }: { img: string }) => {
  return (
    <Card
      style={{
        minWidth: 200,
        position: "relative",
      }}
    >
      <CardMedia className="w-full h-auto" component="img" src={img} />
    </Card>
  );
};

export default CarouselSlide;
