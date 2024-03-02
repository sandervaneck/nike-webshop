import {
  Cart,
  MyProduct,
  QuantityToProduct,
} from "@/app/components/constants/Types";

export function addToCart(
  setCart: (c: Cart) => void,
  cart: Cart,
  item: MyProduct
) {
  const existingProductIndex = cart.products.findIndex(
    (p: QuantityToProduct) => p.product === item
  );
  if (existingProductIndex !== -1) {
    // If the product is already in the cart, increment its quantity
    cart.products[existingProductIndex].quantity++;
  } else {
    // If the product is not in the cart, add it with quantity 1
    cart.products.push({ product: item, quantity: 1 });
  }
  setCart(cart);
}
