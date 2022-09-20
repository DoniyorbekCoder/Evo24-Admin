import { axiosInstance } from "./axios";

export async function uploadPhoto(obj: {}): Promise<[any, any]> {
  try {
    const response = await axiosInstance({
      method: 'post',
      url: 'upload/image?dir=test',
      data: obj
    })
    return [null, response]
  } catch(error) {
    return [error, null]
  }
}

export async function deleteItem(obj: {id: number}, url: string): Promise<[any, any]> {
  try {
    const response = await axiosInstance({
      method: 'delete',
      url: url,
      data: obj
    })
    return [null, response]
  } catch(error) {
    return [error, null]
  }
}

export async function handleAuth(data: { username: string, password: string }): Promise<[any, any]> {
  try {
    const response = await axiosInstance({
      method: 'post',
      url: 'admin/auth',
      data: {
        "username": data.username,
        "password": data.password
      }
    })
    return [null, response.data]
  }

  catch (error) {
    return [error, null]
  }
}

export async function getSelections_API(offset = 0, url: string, search = ''): Promise<any> {
  try {
      const response = await axiosInstance.get(url, {
          params: {
            size: 10,
            offset: offset,
            search: search
          }
      })
      return [null, response]
  } catch (error) {
      return [error, null]
  }
}