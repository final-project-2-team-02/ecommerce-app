import React from "react";
import { Box, Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CartProductItem } from "types/cart";
import { formatter } from "utils/currencyFormatter";
import Typography from "@mui/material/Typography";
import { editQuantityItem } from "redux/reducer/cartReducer";
import { addProductSold } from "redux/reducer/adminDataReducer";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartProduct = useSelector<RootState>(
    (state) => state.cart
  ) as CartProductItem[];

  const handleCheckout = () => {
    dispatch(addProductSold(cartProduct))
  };

  return (
    <Container>
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
            {cartProduct.map((row, id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={row.image}
                    alt={row.title}
                  ></img>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min={1}
                    value={row.quantity}
                    onChange={(e) =>
                      dispatch(
                        editQuantityItem({
                          id: row.id,
                          quantity: parseInt(e.target.value),
                        })
                      )
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  {formatter.format(row.price)}
                </TableCell>
                <TableCell align="right">
                  {formatter.format(row.price * row.quantity)}
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
