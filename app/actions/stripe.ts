"use server";

import type { Stripe } from "stripe";
import { headers } from "next/headers";
import { Cart } from "../components/constants/Types";
import { CURRENCY } from "../config";
import { stripe } from "../lib/stripe";
import { formatAmountForStripe } from "../utils/stripe-helpers";

export async function createCheckoutSession(
  data: FormData,
  amount: number,
  order: Cart
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get(
    "uiMode"
  ) as Stripe.Checkout.SessionCreateParams.UiMode;
  const origin: string = headers().get("origin") as string;

  // Create an array to hold line items
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  // Add each item from the order to the line items array
  order.products.forEach((product) => {
    lineItems.push({
      quantity: product.quantity,
      price_data: {
        currency: CURRENCY,
        product_data: {
          name: product.product.name,
        },
        unit_amount: formatAmountForStripe(product.product.price, CURRENCY),
      },
    });
  });

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      payment_method_types: ["card", "ideal"],
      line_items: lineItems, // Use the lineItems array

      ...(ui_mode === "hosted" && {
        success_url: `${origin}/store`,
        cancel_url: `${origin}/store`,
      }),
      ...(ui_mode === "embedded" && {
        return_url: `${origin}/store/`,
      }),
      ui_mode,
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get("customDonation") as string),
        CURRENCY
      ),
      automatic_payment_methods: { enabled: true },
      currency: CURRENCY,
    });

  return { client_secret: paymentIntent.client_secret as string };
}
