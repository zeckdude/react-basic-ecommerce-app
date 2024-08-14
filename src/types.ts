export type Product = {
  id: number
  product_name: string
  price: number
}

export type CartItem = {
  id: number
  quantity: number
  details: Product
}

export enum QUANTITY_DIRECTION {
  INCREASE = 'increase',
  DECREASE = 'decrease'
}