const yup = require('yup')

const usrRegisterSchema = yup.object({
  body: yup.object({
    name: yup.string().min(3).max(25).required(),
    email: yup.string().email().required(),
    password: yup.string().required('Please Enter your password'),
  }),
})

const usrLoginSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(25)
      .required('Please Enter your password'),
  }),
})

module.exports = { usrRegisterSchema, usrLoginSchema }
