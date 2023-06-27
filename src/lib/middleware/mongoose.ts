import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const mongooseMiddleware = async (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any } } }, next: () => any) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI)
    }
  } catch (err) {
    console.log(err)
    res.status(500).send('database error')
  }
  return next()
}

export default mongooseMiddleware