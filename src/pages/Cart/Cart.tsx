import React from "react";

import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { clearCart, editQuantityItem } from "redux/slices/cartSlice";

import { CartProductItem } from "types/cart";
import { formatter } from "utils/currencyFormatter";
import { addSoldProducts } from "redux/slices/productSlice/productSlice";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartProduct = useSelector<RootState>(
    (state) => state.cart
  ) as CartProductItem[];

  const handleCheckout = () => {
    dispatch(addSoldProducts(cartProduct));
    dispatch(clearCart());
  };

  const handleChangeQty = (
    event: React.FormEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(
      editQuantityItem({
        id: id,
        quantity: parseInt(event.currentTarget.value),
      })
    );
  };

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Product</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProduct.map((item, id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img
                    style={{ width: 50, height: 50 }}
                    src={item.image}
                    alt={item.title}
                  ></img>
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => handleChangeQty(e, item.id)}
                  />
                </TableCell>
                <TableCell align="right">
                  {formatter.format(item.price)}
                </TableCell>
                <TableCell align="right">
                  {formatter.format(item.price * item.quantity)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell colSpan={3}>
                <Typography fontWeight={600}>Total</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontWeight={600}>
                  {formatter.format(
                    cartProduct.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )
                  )}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" width="100%" justifyContent="end" mt={5}>
        <Button variant="contained" onClick={handleCheckout}>
          Checkout
        </Button>
      </Box>
    </Container>
  );
}