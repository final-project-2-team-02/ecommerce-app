import React from "react";

import CardProduct from "components/CardProduct/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/slices/productSlice/productSlice";
import { AppDispatch } from "redux/store";
import { Product } from "types/product";
import { RootState } from "../../redux/store";
import { Container, Box, Typography } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const productsData = useSelector<RootState>(
    (state) => state.products.productStock
  ) as Product[];

  React.useEffect(() => {
    if (productsData.length === 0) {
      dispatch(fetchProducts());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth={"lg"} sx={{ minHeight: "100vh", mb: 10 }}>
      <Typography variant="h4" fontWeight={500} my={4}>
        Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          },
          gap: 3,
        }}
      >
        {productsData.map((item, id) => (
          <CardProduct key={id} productItem={item} />
        ))}
      </Box>
    </Container>
  );
}
