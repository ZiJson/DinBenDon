const baseUrl = 'http://34.80.254.154:8080'

export const get = async <T>(path: string): Promise<T> => {
  const reqUrl = new URL(path, baseUrl)
  const response = await fetch(reqUrl.href, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const res: ApiResponse<T> =
    (await response.json()) as unknown as ApiResponse<T>
  return res.data
}
export const post = async <T>(path: string, payload: object): Promise<T> => {
  const reqUrl = new URL(path, baseUrl)
  const response = await fetch(reqUrl.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const res: ApiResponse<T> =
    (await response.json()) as unknown as ApiResponse<T>
  return res.data
}

interface ApiResponse<T> {
  status: Status
  code: StatusCode
  message: string
  data: T
}

enum Status {
  SUCCESS = 'success',
  FAIL = '未知錯誤'
}

enum StatusCode {
  OK = 200,
  ERROR = 404
}
