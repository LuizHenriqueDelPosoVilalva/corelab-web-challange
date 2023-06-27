import Post from './createPost.model'

import { IPost } from '../interface/postInterface'

export const createPost = async (body: IPost) => {
  try {
    const createPost = {
      ...body,
    }
    const dbCreatePost = await Post.create(createPost)
    return dbCreatePost
  } catch (err) {
    throw err
  }
}

export const getPost = () => {
  console.log("GetPosts")
  return true
}