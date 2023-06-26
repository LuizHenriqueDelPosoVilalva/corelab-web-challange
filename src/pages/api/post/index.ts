import { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'

// Importe createPost e getPost corretamente a partir do caminho correto
import { createPost, getPost } from '../../../modules/posts.service'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.post('/', (req, res) => {
  createPost()
  res.status(200).json({ teste: true })
})

router.get('/', (req, res) => {
  getPost()
  res.status(200).json({ teste: true })
})

export default router