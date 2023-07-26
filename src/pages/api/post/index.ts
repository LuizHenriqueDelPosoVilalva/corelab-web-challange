import { NextApiRequest, NextApiResponse } from 'next'


import validation from '../../../lib/middleware/validation'
import createHandle from '../../../lib/middleware/nextConnect'

import { createPost, getPosts, deletePost } from '../../../modules/posts.service'
import { createPostSchema, deletePostSchema } from '../../../modules/post.schema'

const handler = createHandle()

handler
  .post(validation({ body: createPostSchema }), async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const newPost = await createPost(req.body)
      res.status(201).send(newPost)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { limit } = req.query; // Obter o parâmetro "limit" da URL
      const posts = await getPosts(Number(limit));
      res.status(200).send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  })

  .delete(validation(deletePostSchema), async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      const deletedPost = await deletePost(id)
      if(deletedPost)
        return res.status(200).send({ ok: true })

      return res.status(400).send('post not found')
    }catch(err) {
      return res.status(500).send(err.message)
    }
  })
  
  

export default handler
