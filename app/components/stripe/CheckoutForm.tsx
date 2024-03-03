"use client";

import { CURRENCY } from "@/app/config";
import { totalPrice } from "@/app/store/components/cart/functions";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Cart } from "../constants/Types";
import type Stripe from "stripe";
import { createCheckoutSession } from "@/app/actions/stripe";
import { formatAmountForDisplay } from "@/app/utils/stripe-helpers";
import getStripe from "@/app/utils/get-stripejs";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
  order: Cart;
}

export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
  const [loading] = useState<boolean>(false);

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const amount = totalPrice(props.order);
  const order = props.order;
  const formAction = async (data: FormData): Promise<void> => {
    const uiMode = data.get(
      "uiMode"
    ) as Stripe.Checkout.SessionCreateParams.UiMode;
    const { client_secret, url } = await createCheckoutSession(
      data,
      amount,
      order
    );

    if (uiMode === "embedded") return setClientSecret(client_secret);

    window.location.assign(url as string);
  };

  return (
    <>
      <Box
        style={{
          backgroundColor: "grey",
          border: 10,
          borderColor: "black",
          height: 50,
          width: 130,
          display: "flex", // Add display flex
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <form action={formAction}>
          <input type="hidden" name="uiMode" value={props.uiMode} />
          <button
            className="checkout-style-background"
            type="submit"
            disabled={loading}
          >
            <Typography style={{ color: "white" }}>
              Pay {formatAmountForDisplay(amount, CURRENCY)}
            </Typography>
          </button>
        </form>
      </Box>
      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={getStripe()}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : null}
    </>
  );
}
