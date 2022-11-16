import React from "react";
import { Typography, Container, Grid, Button, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Product } from "types/product";
import { formatter } from "utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { addCartDiffQuantity } from "redux/reducer/cartReducer";
import { CartProductItem } from "types/cart";

export default function ProductDetails() {
  const productItem = useLocation().state as Product;
  const [qty, setQty] = React.useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddCart = () => {
    dispatch(
      addCartDiffQuantity({
        id: productItem.id,
        title: productItem.title,
        quantity: qty,
        price: productItem.price,
        image: productItem.image,
      } as CartProductItem)
    );
  };
  return (
    <Container>
      <Grid container py={5}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={productItem.image}
            alt={productItem.title}
            style={{ maxWidth: "100%", maxHeight: "500px" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          p={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box mb={5}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {productItem.title}
            </Typography>
            <Typography variant="h5" color={"gray"} fontWeight={500} mt={2}>
              {formatter.format(productItem.price)}
            </Typography>
            <Typography
              mt={4}
              variant="body1"
              fontSize={"1.1rem"}
              fontWeight={500}
            >
              {productItem.description}
            </Typography>
            <Typography mt={2} variant="body1" fontWeight={600}>
              Stock {productItem.quantity}
            </Typography>
            <input
              type="number"
              style={{ padding: 5, marginTop: 20 }}
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            />
          </Box>
          <Button
            size="large"
            variant="contained"
            fullWidth
            sx={{ justifySelf: "end" }}
            onClick={handleAddCart}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
