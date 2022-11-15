import React from "react";

import CardProduct from "components/CardProduct/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/reducer/productReducer";
import { AppDispatch } from "redux/store";
import { Product } from "types/product";
import { RootState } from "../../redux/store";
import { Container, Box, Typography } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  const productsData = useSelector<RootState>(
    (state) => state.products
  ) as Product[];

  return (
    <Container maxWidth={"lg"}>
      <Typography variant="h3" my={4}>
        Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          rowGap: 4,
        }}
      >
        {productsData.map((item, id) => (
          <CardProduct key={id} productItem={item} />
        ))}
      </Box>
    </Container>
  );
}
