export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
  rating?: {
    rate: number;
    count: number;
  };
};

export type SoldProduct = {
  id: number | string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  category: string
};
