import { NextApiRequest, NextApiResponse } from 'next'
import connect from 'next-connect'
import Joi from 'joi'

import validation from '../../../lib/middleware/validation'
import { createPost, getPost } from '../../../modules/posts.service'

const postSchema = Joi.object({
  title: Joi.string().required().max(20),
  text: Joi.string().required().max(200)
})

const router = connect<NextApiRequest, NextApiResponse>()

  .post(validation({body:postSchema}), (req, res) => {
    createPost(req.body)
    res.status(200).json({ teste: true })
  })

  .get((req, res) => {
    getPost()
    res.status(200).json({ teste: true })
  })

export default router