export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  categoryId: string;
  subcategoryId: string;
  subSubcategoryId?: string;
  specs?: Record<string, string>;
  inStock?: boolean;
}

export interface SubSubcategory {
  id: string;
  name: string;
  slug: string;
  subcategoryId: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description?: string;
  subSubcategories?: SubSubcategory[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  subcategories: Subcategory[];
}

export interface CartItem extends Product {
  quantity: number;
}