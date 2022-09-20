import type { Lang } from "../types";

export interface Food {
   id: number,
   category: {
      id: number,
      name: Lang,
      active: boolean,
   },
   image: string,
   name: Lang,
   description: Lang,
   price: number,
   top: boolean,
   active: boolean,
   priority: number,
}
export interface Form {
   id: number | null,
   category: {
      id: number | null,
      name: Lang,
      active: boolean | null,
   },
   image: string | null,
   name: Lang,
   description: Lang,
   price: number | null,
   top: boolean | null,
   active: boolean | null,
   priority: number | null,
}

