import Post from './Post.model'

import { IEditPost, IPost } from '../interface/postInterface'

export const createPost = async (body: IPost) => {
  return await Post.create({
    title: body.title,
    task: body.task,
    createdDate: new Date(),
  })
}

export const getPosts = async (limit = 6) => {
  return await Post.find()
    .populate('title')
    .sort({ createdDate: -1 })
    .limit(limit);
}

export const deletePost = async (id: any) => {
  return await Post.findOneAndDelete({
    _id: id
  })
}

export const editPost= async (id: any, titulo: any, tarefa: any) => {
  return await Post.findOneAndUpdate({
    _id: id,
    title: titulo,
    task: tarefa,
    
    new: true
  })
}