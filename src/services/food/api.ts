import { axiosInstance } from "../axios";
import type { Food, Form } from "./entity";
// export async function getFoods(search = ''): Promise<[any, any]> {
//   try {
//     const response = await axiosInstance.get(`food/all`, {
//       params: {
//         search: search
//       }
//     }) as {data: {list:Food[]}}
//     return [null, response.data]
//   }
//   catch(error) {
//     return [error, null]
//   }
// }

export async function getFoods(): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`food/all`) as {data: {list:Food[]}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutFood(formInfo: Form) {
  try {
    const response = await axiosInstance({
      url: 'food',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "category": formInfo.category,
        "image": formInfo.image,
        "name": formInfo.name,
        "description": formInfo.description,
        "price": formInfo.price,
        "top": formInfo.top,
        "active": formInfo.active,
        "priority": formInfo.priority
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
