import mongoose from 'mongoose'

const CreatePostSchema = new mongoose. Schema({
  title: { type: String, required: true, maxlength: 20 },
  task: { type: String, required: true, maxlength: 200 },
  createdDate: { type: Date, required: true },
})

export default mongoose.models.Post || mongoose.model('Post', CreatePostSchema)