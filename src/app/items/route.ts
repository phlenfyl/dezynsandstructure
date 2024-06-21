const API_BASE_URL = 'http://127.0.0.1:8000/shop/';

export async function GET(endpoint: any) {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, { next: { revalidate: 1300 } })
    const data = await res.json()
   
    return Response.json(data)
}