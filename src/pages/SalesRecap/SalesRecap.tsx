import React from "react";
import {
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
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { SoldProduct } from "types/product";
import { formatter } from "utils/currencyFormatter";

export default function SalesRecap() {
  const soldProduct = useSelector<RootState>(
    (state) => state.products.soldProducts
  ) as SoldProduct[];

  return (
    <Container sx={{minHeight: "100vh", mb: 10}}>
      <Typography variant="h5" fontWeight={500} mt={5}>
        Sales Recap
      </Typography>
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
            {soldProduct.map((item, id) => (
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
                  <Typography>{item.title}</Typography>
                  <Typography variant="caption" mt={2}>
                    {item.category}
                  </Typography>
                </TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
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
                    soldProduct.reduce(
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
    </Container>
  );
}
