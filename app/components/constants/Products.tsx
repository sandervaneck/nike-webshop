import { MyProduct } from "./Types";

export const WhiteSneaker: MyProduct = {
  name: "White Nike Sneaker",
  id: "001",
  price: 65,
  category: "Sneakers",
  img: ["Nike_Sneaker_White.jpeg", "Nike_logo.png"],
  description: "White Nike Sneaker for daily activities",
};

export const RedSneaker: MyProduct = {
  name: "Red Nike Sneaker",
  id: "002",
  price: 67,
  category: "Sneakers",
  img: ["Nike_Sneaker_Red.jpeg", "Nike_logo.png"],
  description: "Red Nike Sneaker for daily activities",
};

export const OrangeSneaker: MyProduct = {
  name: "Orange Nike Sneaker",
  id: "003",
  price: 69,
  category: "Sneakers",
  img: ["Nike_Sneaker_Orange.jpeg", "Nike_logo.png"],
  description: "Orange Nike Sneaker for daily activities",
};

export const BlueSneaker: MyProduct = {
  name: "Blue Nike Sneaker",
  id: "004",
  price: 65,
  category: "Sneakers",
  img: ["Nike_Sneaker_Blue.jpeg", "Nike_logo.png"],
  description: "Blue Nike Sneaker for daily activities",
};

export const WhiteRunning: MyProduct = {
  name: "White Nike Running Shoe",
  id: "005",
  price: 85,
  category: "Running",
  img: ["Nike_Running_White.jpeg", "Nike_logo.png"],
  description: "White Running Shoe for top performance",
};

export const PinkRunning: MyProduct = {
  name: "Pink Nike Running Shoe",
  id: "006",
  price: 87,
  category: "Running",
  img: ["Nike_Running_Pink.jpeg", "Nike_logo.png"],
  description: "Pink Running Shoe for top performance",
};

export const PurpleRunning: MyProduct = {
  name: "Purple Nike Running Shoe",
  id: "007",
  price: 89,
  category: "Running",
  img: ["Nike_Running_Purple.jpeg", "Nike_logo.png"],
  description: "Purple Running Shoe for top performance",
};

export const BlueRunning: MyProduct = {
  name: "Blue Nike Running Shoe",
  id: "008",
  price: 85,
  category: "Running",
  img: ["Nike_Running_Blue.jpeg", "Nike_logo.png"],
  description: "Blue Running Shoe for top performance",
};

export const sneakers = [WhiteSneaker, BlueSneaker, OrangeSneaker, RedSneaker];
export const running = [WhiteRunning, BlueRunning, PinkRunning, PurpleRunning];
export const products = sneakers.concat(running);
export const categories = ["All", "Sneakers", "Running"];
