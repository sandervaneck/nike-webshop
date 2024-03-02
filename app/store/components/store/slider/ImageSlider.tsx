import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import { Box, Grid, Stack } from "@mui/material";
import Dots from "./components/Dots";
import Arrow from "./components/Arrow";
import { styled } from "@mui/system";
import { MyProduct } from "@/app/components/constants/Types";
import CarouselSlide from "./components/Carroussel";

const ImageGrid = styled(Grid)({
  justifyContent: "flex-start",
  width: "100%",
  minWidth: "200px",
  overflow: "hidden",
});

const GridItem = styled(Grid)({
  position: "relative",
});

const ImgContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
}));

const StackContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const ImageSlider = ({ item }: { item: MyProduct }) => {
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [index, setIndex] = useState(0);
  const content = item.img[index];
  const numSlides = item.img.length;

  const onArrowClick = (direction: "left" | "right") => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  return (
    <ImageGrid container>
      <GridItem item width="100%">
        <Slide in={slideIn} direction={slideDirection}>
          <ImgContainer style={{ width: "100%" }}>
            <CarouselSlide img={content} />
          </ImgContainer>
        </Slide>
        <StackContainer direction="row">
          <Arrow direction="left" handleClick={() => onArrowClick("left")} />
          <Dots mates={item.img} index={index} />
          <Arrow direction="right" handleClick={() => onArrowClick("right")} />
        </StackContainer>
      </GridItem>
    </ImageGrid>
  );
};

export default ImageSlider;
