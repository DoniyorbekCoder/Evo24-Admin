import type { Form } from './entity'

export * from './api'
export type { Food, Form } from './entity'
export * from '../common'

export function reset(obj: Form) {
  obj.id = null,
  obj.category = {
      id: null,
      name: {uz: '', ru: '', eng: ''},
      active: null
  },
  obj.image = '',
  obj.name = {uz: '', ru: '', eng: ''},
  obj.description = {uz: '', ru: '', eng: ''},
  obj.price = null,
  obj.top = null,
  obj.active = null,
  obj.priority = null
}
