import { Product } from '@/types/catalog';
import { seedProducts } from './seedProducts';

const STORAGE_KEY = 'catalog_products';
const SEED_VERSION_KEY = 'catalog_seed_version';
const SEED_VERSION = 'dahua-price-v3-full-catalog';

function loadProducts(): Product[] {
  try {
    const seedVersion = localStorage.getItem(SEED_VERSION_KEY);
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored && seedVersion === SEED_VERSION) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }

    const initialProducts = seedProducts.map((p, index) => ({
      ...p,
      id: `${p.sku}-seed-${index}`
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
    localStorage.setItem(SEED_VERSION_KEY, SEED_VERSION);
    return initialProducts;
  } catch {
    return [];
  }
}

function saveProducts(products: Product[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (e) {
    console.error('Failed to save products:', e);
  }
}

export const products: Product[] = loadProducts();

export function addProducts(newProducts: Omit<Product, 'id'>[]): { added: Product[], skipped: Product[], duplicates: string[] } {
  const existingSkus = new Set(products.map(p => p.sku.toLowerCase()));
  const added: Product[] = [];
  const skipped: Product[] = [];
  const duplicates: string[] = [];
  
  for (const newProduct of newProducts) {
    const skuLower = newProduct.sku.toLowerCase();
    if (existingSkus.has(skuLower)) {
      duplicates.push(newProduct.sku);
      skipped.push(newProduct as Product);
    } else {
      const productWithId = {
        ...newProduct,
        id: `${newProduct.sku}-${Date.now()}-${added.length}`
      };
      products.push(productWithId);
      added.push(productWithId);
      existingSkus.add(skuLower);
    }
  }
  
  if (added.length > 0) {
    saveProducts(products);
  }
  
  return { added, skipped, duplicates };
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

export function clearAllProducts(): void {
  products.length = 0;
  saveProducts(products);
}