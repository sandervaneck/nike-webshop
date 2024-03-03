import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store | About",
};

import React from "react";
import { Container, Paper, Typography, Stack } from "@mui/material";
import { aboutText, brand } from "@/app/components/constants/Texts";
import { styled } from "@mui/system";
import AppBarContainer from "@/app/components/appBar";

const ContainerStyled = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh", // Ensure the container takes full viewport height
});

const PaperStyled = styled(Paper)(({ theme }) => ({
  marginTop: 10,
  minHeight: "25vh", // Full screen
  minWidth: "50vh", // Full screen
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: theme.spacing(2),
}));

const MainText = styled(Typography)({
  fontFamily: "Meow Script, cursive",
  marginBottom: 2,
  maxWidth: 375,
  marginLeft: 30,
  fontSize: "2rem",
});

const AboutSection = ({
  openCart,
  setOpenCart,
  numberOfItems,
}: {
  openCart: boolean;
  numberOfItems: number;
  setOpenCart: (b: boolean) => void;
}) => {
  return (
    <ContainerStyled>
      <AppBarContainer
        numberOfItems={numberOfItems}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <Stack style={{ marginTop: 50 }} direction="column">
        <MainText>About {brand}</MainText>
        <MainText>{aboutText()}</MainText>
      </Stack>
      <PaperStyled style={{ backgroundImage: "url(/Founders.png)" }} />
    </ContainerStyled>
  );
};

export default AboutSection;
