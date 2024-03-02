import { categories } from "@/app/components/constants/Products";
import { Cart, MyProduct } from "@/app/components/constants/Types";
import { styled, Container } from "@mui/material";
import Categories from "./store/Categories";
import { useState } from "react";
import { ItemList } from "./store/ItemList";
import SingleProductPage from "./store/SingleProductPage";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh", // Ensure the container takes full viewport height
  minWidth: "100vh", // Default minWidth for large screens
  "@media (max-width: 1280px)": {
    minWidth: "100vh", // Adjust minWidth for phone screens
  },
  "@media (max-width: 960px)": {
    minWidth: "50vh", // Adjust minWidth for phone screens
  },
  "@media (max-width: 600px)": {
    minWidth: "0", // Adjust minWidth for phone screens
  },
});

const StyledContent = styled("div")({
  flex: 1, // Allow content to take up remaining space vertically
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start", // Adjusted to align items at the top
  width: "100%", // Ensure content fills the width of the container
  maxWidth: "960px", // Adjust as needed
  padding: 2, // Adjust spacing as needed
  "@media (max-width: 1280px)": {
    minWidth: "150vh", // Adjust minWidth for phone screens
  },
  "@media (max-width: 600px)": {
    minWidth: "0", // Adjust minWidth for phone screens
  },
});

interface ProductStoreProps {
  openCart: boolean;
  numberOfItems: number;
  setOpenCart: (b: boolean) => void;
  cart: Cart;
  setCart: (c: Cart) => void;
}

export const ProductStore: React.FC<ProductStoreProps> = ({
  cart,
  setCart,
}) => {
  const [category, setCategory] = useState(categories[0]);
  const [product, setProduct] = useState<MyProduct | null>(null);

  return (
    <StyledContainer>
      <StyledContent>
        <Categories
          categories={categories}
          category={category}
          setCategory={setCategory}
          setProduct={setProduct}
        />
        {product === null ? (
          <ItemList
            cart={cart}
            setCart={setCart}
            category={category}
            setProduct={setProduct}
          />
        ) : (
          <>
            <SingleProductPage
              cart={cart}
              setCart={setCart}
              item={product}
              setProduct={setProduct}
            />
          </>
        )}
      </StyledContent>
    </StyledContainer>
  );
};
