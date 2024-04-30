import { get } from '@services/api'
export const fetchAllShops = async (): Promise<Shop[]> => {
  return await get<Shop[]>('/shop/selectAll')
}

// 之後移到@type
interface Shop {
  shopName: string
  phone: string
  address: string
  image: string
  lastUpdated: string
}
