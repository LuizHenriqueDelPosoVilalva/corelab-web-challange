import Joi from 'joi'

import validation from '../../../lib/middleware/validation'
import createHandle from '../../../lib/middleware/nextConnect'

import { createPost } from '../../../modules/posts.service'

const postSchema = Joi.object({
  title: Joi.string().required().max(20),
  text: Joi.string().required().max(200)
})

const router = createHandle()

router.post(validation({body:postSchema}), async (req, res) => {
  try {
    const create = await createPost(req.body)
    res.status(201).json(create)
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default router