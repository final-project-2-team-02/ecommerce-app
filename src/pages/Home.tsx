import React from "react";

import CardProduct from "components/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/reducer/StoreApi";
import { AppDispatch } from "redux/store";
import { Product } from "types/product";
import { RootState } from "../redux/store";
import { Container, Box } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  const productsData = useSelector<RootState>(
    (state) => state.products
  ) as Product[];

  console.log(productsData);

  return (
    <Container maxWidth={"lg"} sx={{ mt: 10 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          rowGap: 4,
        }}
      >
        {productsData.map((item, id) => (
          <CardProduct
            key={id}
            title={item.title}
            img={item.image}
            price={item.price}
          />
        ))}
      </Box>
    </Container>
  );
}
