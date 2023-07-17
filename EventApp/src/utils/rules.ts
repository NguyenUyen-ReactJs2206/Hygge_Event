import type { RegisterOptions } from 'react-hook-form'

type Rules = {
  [key in 'email' | 'phone']?: RegisterOptions
}

export const rules: Rules = {
  email: {
    required: true,
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    }
  }
}
