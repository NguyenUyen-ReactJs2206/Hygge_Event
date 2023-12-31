import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from 'src/utils/rules'
import { toast } from 'react-toastify'
import './index.css'
import { useState } from 'react'
import PopupForm from '../PopupForm'
import emailjs from '@emailjs/browser'
import {
  YOUR_EMAIL_SERVICE_ID,
  YOUR_EMAIL_TEAMPLATE_ID_CUSTOMER,
  YOUR_EMAIL_TEAMPLATE_ID_SERVER,
  YOUR_PUBLIC_KEY_ID
} from 'src/env'
import { useTranslation } from 'react-i18next'

export default function FormContact() {
  const { t } = useTranslation('contact')
  const [showPopup, setShowPopup] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Schema>({
    resolver: yupResolver(schema)
  })

  const handleClick = () => {
    if (errors.email?.message) {
      toast.error(`${errors.email.message}`, {
        autoClose: 3000,
        position: 'bottom-right'
      })
    }
    if (!errors) {
      setShowPopup(true)
    }
  }
  const onSubmit = (data: Schema) => {
    console.log(data)
    setShowPopup(true)

    const customer_name = data.name
    const customer_email = data.email
    const customer_phone = data.phone
    const customer_subject = data.subject
    const customer_comment = data.comment

    // Gửi email
    const templateParams = {
      // Thông tin cần gửi trong email
      to_email: 'nhoxnhobe99@gmail.com',
      from_email: 'nhoxnhobe99@gmail.com',
      customer_name: `${customer_name}`,
      customer_email: `${customer_email}`,
      customer_phone: `${customer_phone}`,
      customer_subject: `${customer_subject}`,
      customer_comment: `${customer_comment}`
    }

    emailjs
      .send(`${YOUR_EMAIL_SERVICE_ID}`, `${YOUR_EMAIL_TEAMPLATE_ID_SERVER}`, templateParams, `${YOUR_PUBLIC_KEY_ID}`)
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text)
        },
        (error) => {
          console.error('Email failed to send:', error)
        }
      )
    emailjs
      .send(`${YOUR_EMAIL_SERVICE_ID}`, `${YOUR_EMAIL_TEAMPLATE_ID_CUSTOMER}`, templateParams, `${YOUR_PUBLIC_KEY_ID}`)
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text)
        },
        (error) => {
          console.error('Email failed to send:', error)
        }
      )
  }

  const handleClose = () => {
    setShowPopup(false)
    reset()
  }
  const handleOverlayClick = (event: any) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
    reset()
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-blue/10 px-4 py-20 text-center sm:px-6 md:px-10 lg:px-16 xl:px-20'
        noValidate
      >
        <h2 className='mb-4 text-3xl font-extrabold text-blue sm:mb-10 sm:text-4xl md:text-5xl'>
          {t('form.get in touch')}
        </h2>
        <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder={t('form.your name')}
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('name')}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder={t('form.email')}
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('email')}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder={t('form.phone')}
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('phone')}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder={t('form.subject')}
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('subject')}
            />
          </div>
          <div className='col-span-2'>
            <textarea
              placeholder={t('form.comment')}
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              rows={4}
              {...register('comment')}
            ></textarea>
            <div className='mt-1 min-h-[17px] text-sm text-red-600'></div>
          </div>
          <div className='col-span-2'>
            <button
              type='submit'
              onClick={handleClick}
              className='mt-4 w-full bg-blue/80 px-4 py-4 text-lg uppercase text-white outline-none transition-all duration-300 hover:bg-blue hover:duration-300 sm:mt-6'
            >
              {t('form.submit')}
            </button>
          </div>
        </div>
      </form>

      <PopupForm showPopup={showPopup} handleOverlayClick={handleOverlayClick} onClose={handleClose} />
    </div>
  )
}
