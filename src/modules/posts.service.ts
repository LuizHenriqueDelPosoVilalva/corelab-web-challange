import { IPost } from '../interface/postInterface'

export const createPost = (body: IPost) => {
  console.log(body)
  return true
}

export const getPost = () => {
  console.log("GetPosts")
  return true
}