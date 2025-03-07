export type Product = {
  category: number;
  hero_image: string;
  id: number;
  imagesUrl: string[];
  maxQuantity: number;
  price: number | null;
  slug: string;
  title: string;
};

export type Category = {
  created_at: string;
  id: number;
  imageUrl: string;
  name: string;
  slug: string;
};


export type CategoryWithProducts = {
  created_at: string;
  id: number;
  imageUrl: string;
  name: string;
  products: Product[];
  slug: string;
}

export type CategoriesWithProductsResponse = CategoryWithProducts[];