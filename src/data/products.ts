import { Product } from '@/types/catalog';

export const products: Product[] = [];

export function addProducts(newProducts: Omit<Product, 'id'>[]): Product[] {
  const productsWithIds = newProducts.map((product, index) => ({
    ...product,
    id: `${product.sku || Date.now()}-${index}`
  }));
  
  products.push(...productsWithIds);
  return productsWithIds;
}

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return products.filter(p => p.subcategoryId === subcategoryId);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.sku.toLowerCase().includes(lowerQuery)
  );
}
