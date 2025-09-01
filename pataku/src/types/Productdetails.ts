export interface Products {
  slug: string;
  name: string;
  sku: string;
  stock: number;
  oldPrice?: number;
  price: number;
  unitPrice?: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  image: string;
  categories:string[];
  category:string[]
}
