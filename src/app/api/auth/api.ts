import { Category, PaginatedResponse, Product, Pricing, Subscribe } from "./types";

const API_BASE_URL = 'https://dnstructures.pythonanywhere.com/shop/';
export const API_URL = 'https://dnstructures.pythonanywhere.com/';
export const CART_URL = 'https://dnstructures.pythonanywhere.com';


export async function getProduct(endpoint: string): Promise<PaginatedResponse<Product>>{
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { next: { revalidate: 1300 } });
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const data: PaginatedResponse<Product> = await response.json()    
    return data
}

export async function getCategories(endpoint: string): Promise<Category[]> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {cache: 'no-store', next: { revalidate: 1300 } });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();    
    return data;
}

export async function getPricing(endpoint: string): Promise<Pricing> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {cache: 'no-store', next: { revalidate: 1300 } });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();    
    return data;
}


export async function getCategorySlug(slug: string): Promise<PaginatedResponse<Product>> {
    const response = await fetch(`${API_BASE_URL}categoryslugs/${slug}`, {cache: 'no-store', next: { revalidate: 1300 } });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: PaginatedResponse<Product> = await response.json()    
    return data
}