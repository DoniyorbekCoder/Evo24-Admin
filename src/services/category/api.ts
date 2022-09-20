import { axiosInstance } from "../axios";
import type { Category, Form } from "./entity";
export async function getCategories(): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`category/all`) as {data: {list:Category[]}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutCategory(formInfo: Form) {
  try {
    const response = await axiosInstance({
      url: 'category',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "name": formInfo.name,
        "priority": formInfo.priority,
        "active": formInfo.active,
        "foods": formInfo.foods
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
