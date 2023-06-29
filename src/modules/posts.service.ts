import Post from './Post.model'

import { IPost } from '../interface/postInterface'

export const createPost = async (body: IPost) => {
  return await Post.create({
    title: body.title,
    task: body.task,
  })
}

export const getPosts = async (limit = 12) => {
  return await Post.find()
    .populate('title')
    .sort({createdDate: -1})
    .limit(limit)
}