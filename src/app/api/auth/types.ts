export interface Category {
    id: number;
    slug: string;
    name: string;
    [key: string]: any;
}

export interface Subscribe {
    map(arg0: (item: any) => void): unknown;
    id: number;
    monthly: string;
    quaterly: string;
    yearly: string;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
}

export interface Pricing {
    id: number;
    premium: string;
    standard: string;
    regular: string;
    premium_plus: string;
    created_at: string;
    updated_at: string;
}

export interface ProductImage {
    id: number;
    image: string;
    alt_text: string;
    is_featured: boolean;
    created: string;
    updated: string;
    product: number;
}

export interface Product {
    id: number;
    subscribe: Subscribe;
    prices: Pricing;
    product_images: ProductImage[];
    category_name: string;
    category_slug: string;
    catsland_name: string;
    catsland_slug: string;
    name: string;
    slug: string;
    info: string;
    is_featured: boolean;
    display: boolean;
    created: string;
    updated: string;
    category: number;
    landcategory: number;
    count: number;
    next: string | null;
    previous: string | null;
    results: string;
}

export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface CartItem {
    id: number;
    product_name: string | null;
    product_image: string;
    product_alt: string;
    item_price: number | null;
    plan_name: string | null;
    quantity: number;
}

// types.ts
export interface CarouselImage {
    id: number;
    carouselsoon: ComingSoon[];
    carouselleft: LeftImage[];
    carouselright: RightImage[];
    created: string
}

export interface ComingSoon {
    id: number;
    image: string;
    alt_text: string;
    created: string;
    carousel: number;
}

export interface LeftImage {
    id: number;
    image: string;
    alt_text: string;
    created: string;
    carousel: number;
}

export interface RightImage {
    id: number;
    image: string;
    alt_text: string;
    created: string;
    carousel: number;
}



