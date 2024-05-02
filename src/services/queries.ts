import { get } from './api'
import type * as ApiType from './types'

export const fetchAllShops = async (): Promise<ApiType.Shop[]> => {
  return await get<ApiType.Shop[]>('/shop/selectAll')
}

export const getUserLoginInfo = async (
  param: string
): Promise<ApiType.LoginResponse> => {
  return await get<ApiType.LoginResponse>('/user/selectByAccount/' + param)
}
