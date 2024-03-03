"use client";
import React, { useState } from "react";
import { Paper, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { numberOfItems } from "../components/cart/functions";
import AboutSection from "./AboutSection";
import { emptyCart } from "@/app/components/constants/Defaults";

const PaperStyled = styled(Paper)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center", // Center the content horizontally
  alignItems: "center", // Center the content vertically
  [theme.breakpoints.up("sm")]: {
    minWidth: "80vw", // Set the minimum width on small screens
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "90vw", // Set the minimum width on large screens
  },
  padding: theme.spacing(4), // Add padding for spacing
}));

export default function AboutPage(): JSX.Element {
  const [cart, setCart] = useState(emptyCart);
  const [openCart, setOpenCart] = useState(false);
  const [number, setNumber] = useState(numberOfItems(cart));

  return (
    <PaperStyled>
      <Grid
        container
        style={{
          marginTop: 0.5,
          paddingBottom: 0.5,
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            marginTop: 0.5,
            paddingBottom: 0.5,
          }}
        >
          <AboutSection
            openCart={openCart}
            numberOfItems={number}
            setOpenCart={setOpenCart}
          />
        </Grid>
      </Grid>
    </PaperStyled>
  );
}
