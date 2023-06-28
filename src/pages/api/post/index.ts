import validation from '../../../lib/middleware/validation'
import createHandle from '../../../lib/middleware/nextConnect'

import { createPost } from '../../../modules/posts.service'
import { createPostSchema } from '../../../modules/post.schema'

const router = createHandle()

router.post(validation({body:createPostSchema}), async (req, res) => {
  try {
    const create = await createPost(req.body)
    res.status(201).json(create)
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default router