export type Shop = {
  shopName: string
  phone: string
  address: string
  image: string
  lastUpdated: string
}

export type RegisterRequest = {
  userID?: number
  account: string
  passWord: string
  phone?: string
  userName?: string
  image?: string
  level: number
  createTime?: string
  updateTime?: string
}

export type RegisterResponse = {
  userID: number
}

export type LoginResponse = {
  userID: number
  account: string
  passWord: string
  phone: string | null
  userName: string | null
  image: string | null
  level: 1 | 0 // 1 管理員 0 普通用戶
  createTime: string
  updateTime: string
}
