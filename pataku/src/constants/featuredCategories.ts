export interface FeaturedCategoryItem {
  name: string;
  image: string;
  description: string[] | string;
}

export const featuredCategories: FeaturedCategoryItem[] = [
  { name: 'FURNITURE', image: '/img/category_1.jpg', description: ['Featured', 'Furniture', 'Table', 'Chair'] },
  { name: 'ROOMS', image: '/img/category_2.jpg', description: ['Living Room', 'Bedroom', 'Dining'] },
  { name: 'LIGHTING', image: '/img/category_3.jpg', description: ['Ceiling', 'Lamp', 'Wall'] },
  { name: 'DECOR', image: '/img/category_4.jpg', description: ['Vases', 'Wall Decor', 'Rugs'] },
  { name: 'OUTDOOR', image: '/img/category_5.jpg', description: ['Garden', 'Patio', 'Balcony'] },
  { name: 'KITCHEN', image: '/img/category_6.jpg', description: ['Cookware', 'Storage', 'Utensils'] },
];
