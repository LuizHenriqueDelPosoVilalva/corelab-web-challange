import Joi from 'joi';
import mongoose from 'mongoose';

export const createPostSchema = Joi.object({
  title: Joi.string().required().max(20),
  task: Joi.string().required().max(200)
});

export const deletePostSchema = Joi.object({
  id: Joi.string().required().custom((value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  })
});
