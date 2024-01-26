export interface getAllPost {
  id: number
  text: string | null
  img: string
  tema: string
  meta: Meta
}

export interface Meta {
  author: string
  imgAvtor: string
  Login: string
  createdAt: string
}