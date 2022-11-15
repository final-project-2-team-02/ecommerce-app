import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { formatter } from "utils/currencyFormatter";
import { useNavigate } from "react-router-dom";
import { Product } from "types/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { addCart } from "redux/reducer/cartReducer";

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
    <Card sx={{ maxWidth: 345, pb: 2 }}>
      <CardMedia
        component="img"
        alt={productItem.title}
        height="250"
        image={productItem.image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Chip
          label={productItem.category}
          color="primary"
          size="small"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography
          gutterBottom
          variant="h6"
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
