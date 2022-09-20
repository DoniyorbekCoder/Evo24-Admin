import type { Food } from "../food/entity";
import type { Lang } from "../types";

export interface Category {
   id: number,
   name: Lang,
   priority: number,
   active: boolean,
   foods: Food[],
}
export interface Form {
   id: number | null,
   name: Lang,
   priority: number | null,
   active: boolean | null,
   foods: Food[],
}

