const baseUrl = 'http://34.80.254.154:8080'

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

export const get = async <T, Q = undefined>(
  path: string,
  queries?: Q
): Promise<T> => {
  const reqUrl = new URL(path, baseUrl)
  if (queries) {
    // 添加參數
    reqUrl.search = new URLSearchParams(queries).toString()
  }
  try {
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
  } catch (error) {
    console.error('Get operation failed: ', (error as Error).message)
    throw error
  }
}

export const post = async <P, T>(path: string, params: P): Promise<T> => {
  const reqUrl = new URL(path, baseUrl)
  try {
    const response = await fetch(reqUrl.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const res: ApiResponse<T> =
      (await response.json()) as unknown as ApiResponse<T>
    return res.data
  } catch (error) {
    console.error('Post operation failed: ', (error as Error).message)
    throw error
  }
}
