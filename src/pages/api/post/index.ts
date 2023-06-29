import { NextApiRequest, NextApiResponse } from 'next';

import validation from '../../../lib/middleware/validation'
import createHandle from '../../../lib/middleware/nextConnect'

import { createPost,getPosts } from '../../../modules/posts.service'
import { createPostSchema } from '../../../modules/post.schema'

const handler = createHandle()

handler
  .post(validation({body:createPostSchema}), async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const newPost = await createPost(req.body)
      res.status(201).json(newPost)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const post = await getPosts()
      res.status(200).send(post)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

export default handler