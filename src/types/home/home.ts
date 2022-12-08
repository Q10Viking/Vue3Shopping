export type GoodsNew = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

export type GoodsHot = {
  id: string
  picture: string
  title: string
  alt: string
}

export type GoodsBrand = {
  id: string
  msg: string
  result: Object[]
  picture: string
  name: string
  nameEn: string
}
