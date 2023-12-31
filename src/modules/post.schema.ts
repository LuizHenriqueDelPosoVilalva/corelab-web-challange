const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)

export const createPostSchema = Joi.object({
  title: Joi.string().required().max(20),
  task: Joi.string().required().max(200)
});

export const deletePostSchema = Joi.object({
  id: Joi.objectId().required()
})

export const editPostSchema= Joi.object({
  id: Joi.objectId().required(),
  title: Joi.string().required().max(20),
  text:Joi.string().required().max(256)
})
