import { Cart, MyProduct } from "@/app/components/constants/Types";
import {
  styled,
  Card,
  CardMedia,
  Button,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCart } from "../cart/functions";

const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: 150,
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
  [theme.breakpoints.up("sm")]: {
    height: 100,
  },
}));

interface SingleItemProps {
  cart: Cart;
  setCart: (c: Cart) => void;
  item: MyProduct;
  setProduct: (a: MyProduct | null) => void;
}

export const SingleItem: React.FC<SingleItemProps> = ({
  item,
  setProduct,
  setCart,
  cart,
}) => {
  const { price, img, name } = item;

  return (
    <Grid
      item
      className="justify-center md:justify-normal w-full md:w-auto stepan"
    >
      <StyledCard>
        <CardActionArea onClick={() => setProduct(item)}>
          <StyledCardMedia image={img[0]} title={name} />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h4">
              {name.substring(0, 20)}...
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              €{price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          className="w-full text-black"
          onClick={() => addToCart(setCart, cart, item)}
        >
          <ShoppingCartIcon />+
        </Button>
      </StyledCard>
    </Grid>
  );
};
