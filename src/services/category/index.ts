import type { Form } from './entity'

export * from './api'
export type { Category, Form } from './entity'
export * from '../common'
export * from '../category'

export function reset(obj: Form) {
  obj.id = null,
  obj.name = {uz: '', ru: '', eng: ''},
  obj.priority = null,
  obj.active = null,
  obj.foods = []
}
