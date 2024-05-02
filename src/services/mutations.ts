import { post } from './api'
import type * as ApiType from './types'

export const postUserRegisterInfo = async (data: ApiType.RegisterRequest) => {
  return await post<ApiType.RegisterRequest, ApiType.RegisterResponse>(
    '/user/add',
    data
  )
}
