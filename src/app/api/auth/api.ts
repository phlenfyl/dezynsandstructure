import { Category, PaginatedResponse, Product, Pricing, Subscribe, CarouselImage } from "./types";
import axios from "axios";

const API_BASE_URL = 'https://dnstructures.pythonanywhere.com/shop/';
export const API_URL = 'https://dnstructures.pythonanywhere.com/';
export const CART_URL = 'https://dnstructures.pythonanywhere.com';


export async function getCart(endpoint: string, access_token: any){
    const response = await fetch(`${API_URL}${endpoint}`, 
      { 
        headers: {
          Authorization: `Bearer ${access_token}`
        },           
        cache: 'no-store',
        next: { revalidate: 1000 },
    
      }
    );
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json()    
    return data
}


export async function getProduct(endpoint: string): Promise<PaginatedResponse<Product>>{
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { next: { revalidate: 1300 } });
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const data: PaginatedResponse<Product> = await response.json()    
    return data
}

export async function getCarousel(endpoint: string): Promise<CarouselImage[]> {
    const response = await axios.get<CarouselImage[]>(`${API_BASE_URL}${endpoint}`);
    if (!response.data) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: CarouselImage[] = response.data;    

    return data;
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