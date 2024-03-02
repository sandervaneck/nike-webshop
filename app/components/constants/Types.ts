export type MyProduct = {
  name: string;
  id: string;
  price: number;
  category: string;
  img: string[];
  description: string;
};

export type Cart = {
  products: QuantityToProduct[];
};

export type QuantityToProduct = {
  product: MyProduct;
  quantity: number;
};
