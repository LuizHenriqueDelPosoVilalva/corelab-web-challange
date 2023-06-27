import withJoi from 'next-joi'

export default withJoi({
  onValidationError: (req,res,error) => {
    return res.status(200).send(error.details)
  }
})