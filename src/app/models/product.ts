export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  category: string;
  /** 0–5; shown as number on cards until star UI is wired */
  rating: number;
  /** Units available in inventory */
  quantity: number;
  description: string;
}
