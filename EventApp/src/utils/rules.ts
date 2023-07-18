import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required('Email là bắt buộc').email('Email không đúng định dạng'),
  phone: yup.string().required(),
  subject: yup.string().required(),
  comment: yup.string().required()
})

export type Schema = yup.InferType<typeof schema>
