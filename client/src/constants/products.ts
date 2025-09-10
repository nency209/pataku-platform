import { Product } from '@/types'

export const newArrivalsProducts: Product[] = [
  { slug: "new-sale",name:'1. New and sale badge', price: 110.0, badges: ['SALE'] as const, image: '/img/product1.jpg', oldprice: 130.0, countdown: [0, 0, 0, 0], },
  { slug: "new-badge",name:'2. New badge product', price: 80.0, badges: ['NEW'] as const, image: '/img/product2.jpg', countdown: [0, 0, 0, 0] ,discount:113},
  { slug: "Variable-product",name:'3. Variable Product', price: 50.0, badges: ['NEW'] as const, image: '/img/product3.jpg',oldprice:85.0, countdown: [0, 0, 0, 0] },
  { slug: "Soldout-product",name:'4. Soldout product', price: 19.0, badges: ['NEW'] as const, image: '/img/product4.jpg',oldprice:29.0, countdown: [0, 0, 0, 0] },
  { slug: "Sample-affiliate-product",name:'6. Sample affiliate product', price: 55.0, badges: ['SALE'] as const, image: '/img/product6.jpg', countdown: [0, 0, 0, 0] },
  { slug: "Simple-Product",name:'5. Simple Product', price: 70.0, badges: ['SALE'] as const, image: '/img/product5.jpg', countdown: [0, 0, 0, 0] },
  { slug: "Variable-With-Soldout",name:'7. Variable With Soldout', price: 55.0,oldprice:75, badges: ['SALE'] as const, image: '/img/product7.jpg', countdown: [0, 0, 0, 0] },
  // { slug: "Without shortcode",name:'8. Without shortcode', price: 19.0, badges: ['SOLD OUT'] as const, image: '/img/product-chair-03.jpg', countdown: [0, 0, 0, 0] },
  { slug: "Withoutshortcode",name:'9. Without shortcode', price: 12.0, badges: ['NEW'] as const, image: '/img/product9.jpg', countdown: [0, 0, 0, 0] },
   { slug: "Countdown-Product",name:'10. Countdown Product', price: 39.0,oldprice:60, badges: ['SALE'] as const, image: '/img/product10.jpg', countdown: [0, 0, 0, 0] },
  
  { slug: "video",name:'11. Product with video', price: 39.0, badges: ['SALE'] as const, image: '/img/product_11.jpg', countdown: [0, 0, 0, 0] },
  { slug: "Demo-product-title",name:'12. Demo product title', price: 19.0, badges: ['SOLD OUT'] as const, image: '/img/product12.jpg', countdown: [0, 0, 0, 0] },
  
]





