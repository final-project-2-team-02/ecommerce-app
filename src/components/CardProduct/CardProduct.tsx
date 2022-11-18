import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { formatter } from "utils/currencyFormatter";
import { useNavigate } from "react-router-dom";
import { Product } from "types/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { addCart } from "redux/slices/cartSlice";

interface Props {
  productItem: Product;
}

export default function CardProduct({ productItem }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleClickDetails = (id: string | number | undefined) => {
    navigate(`/product/${id}`, { state: productItem });
  };

  const handleAddcart = (productItem: Product) => {
    dispatch(addCart(productItem));
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          alt={productItem.title}
          image={productItem.image}
          sx={{ objectFit: "contain", height: "150px" }}
        />
        <CardContent>
          <Chip
            label={productItem.category}
            color="primary"
            size="small"
            variant="outlined"
            sx={{ my: 2, fontSize: "0.8rem" }}
          />
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {productItem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatter.format(productItem.price as number)}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button size="small" onClick={() => handleClickDetails(productItem.id)}>
          Details
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => handleAddcart(productItem)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
