import React from "react";

import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { Product } from "types/product";
import Typography from "@mui/material/Typography";
import { formatter } from "utils/currencyFormatter";
import { editStockProduct } from "redux/slices/productSlice/productSlice";
// import { formatter } from "utils/currencyFormatter";

export default function ProductStocks() {
  const dispatch = useDispatch<AppDispatch>();
  const productStock = useSelector<RootState>(
    (state) => state.products.productStock
  ) as Product[];

  const handleChangeQty = (
    event: React.FormEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(
      editStockProduct({ id, quantity: parseInt(event.currentTarget.value) })
    );
  };

  return (
    <Container sx={{ minHeight: "100vh", mb: 10 }}>
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productStock.map((item, id) => (
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
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="caption">{item.category}</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => handleChangeQty(e, item.id)}
                  />
                </TableCell>
                <TableCell>{formatter.format(item.price)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
