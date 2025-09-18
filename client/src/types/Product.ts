export interface Product {

  _id: string;
  image: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: string;
  oldprice?:number;
  created: string;
  discount?:number;
 

}