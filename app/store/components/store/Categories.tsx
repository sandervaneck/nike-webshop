import { MyProduct } from "@/app/components/constants/Types";
import { styled, Grid, Button } from "@mui/material";

const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  marginTop: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(0.5),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  letterSpacing: 3,
}));

const Categories = ({
  category,
  setCategory,
  categories,
  setProduct,
}: {
  setProduct: (a: MyProduct | null) => void;
  categories: string[];
  category: string;
  setCategory: (a: string) => void;
}) => {
  return (
    <StyledGrid container item spacing={2}>
      {categories.map((cat, idx) => (
        <Grid item key={idx}>
          <StyledButton
            size="small"
            color="primary"
            variant={cat === category ? "outlined" : "contained"}
            classes={{ contained: `btn btn-md bg-[#3f51b5] h-full` }}
            onClick={() => {
              setProduct(null);
              setCategory(cat);
            }}
          >
            {cat}
          </StyledButton>
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default Categories;
