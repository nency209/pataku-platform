export interface Product {
  slug: string;
  name: string;
  price: number;
  oldprice?: number;
  image: string;
  category?: string;
  badges?: ("SALE" | "NEW" | "SOLD OUT")[];
  description?: string;
 countdown?: number[];
  discount?: number;
}