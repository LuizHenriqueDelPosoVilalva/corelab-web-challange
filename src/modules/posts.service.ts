import { ObjectId } from 'mongoose';

import Post from './Post.model'

import { IPost } from '../interface/postInterface'

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

export const deletePost = async (id) => {
  return await Post.findOneAndDelete({
    _id: id
  })
}
