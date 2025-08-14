export interface Product {
  id?: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  badges?: readonly ("SALE" | "NEW" | "SOLD OUT")[];
  description?: string;
  inStock?: boolean;
}

export interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  badges?: readonly ("SALE" | "NEW" | "SOLD OUT")[];
  countdown?: number[];
  image: string;
  discount?: number;
}
