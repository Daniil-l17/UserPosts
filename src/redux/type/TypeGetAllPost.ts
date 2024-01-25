export interface getAllPost {
  id: string
  text: string
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