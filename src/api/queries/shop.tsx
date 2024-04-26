const baseUrl = 'http://34.80.254.154:8080'

export const fetchAllShops = async (): Promise<Shop[]> => {
  const response = await fetch(`${baseUrl}/shop/selectAll`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json() as unknown as Shop[]
}

// 之後移到@type
interface Shop {
  shopName: string
  phone: string
  address: string
  image: string
  lastUpdated: string
}
