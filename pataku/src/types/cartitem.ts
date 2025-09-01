// simple cart item type used by the slice and components
export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
}
