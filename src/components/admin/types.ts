export interface PreviewProduct {
  sku: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  subcategoryId: string;
  subSubcategoryId?: string;
  inStock: boolean;
  manufacturer?: string;
  specifications?: string;
  isDuplicate?: boolean;
}
