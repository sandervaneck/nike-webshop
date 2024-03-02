"use client";
import { useState } from "react";
import AppBarContainer from "../components/appBar";
import { Cart } from "../components/constants/Types";
import { ProductStore } from "./components/Store";

const emptyCart: Cart = {
  products: [],
};

export default function Store(): JSX.Element {
  const [cart, setCart] = useState(emptyCart);
  const [openCart, setOpenCart] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <>
      <AppBarContainer
        setOpenCart={setOpenCart}
        openCart={openCart}
        numberOfItems={number}
      />
      <ProductStore
        openCart={openCart}
        numberOfItems={number}
        setOpenCart={setOpenCart}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}
