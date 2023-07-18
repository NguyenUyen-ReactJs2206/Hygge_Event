import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from 'src/utils/rules'
import { toast } from 'react-toastify'
import './index.css'
import { useState } from 'react'
import PopupForm from '../PopupForm'

export default function FormContact() {
  const [showPopup, setShowPopup] = useState(false)
  const {
    register,
    handleSubmit,
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
    if (data) {
      setShowPopup(true)
    }
  }
  const handleClose = () => {
    setShowPopup(false)
  }
  const handleOverlayClick = (event: any) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-blue/10 px-4 py-20 text-center sm:px-6 md:px-10 lg:px-16 xl:px-20'
        noValidate
      >
        <h2 className='mb-12 text-5xl font-extrabold text-blue'>Get In Touch</h2>
        <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Your Name'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('name')}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Email'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('email')}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Phone Number'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('phone')}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Subject'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('subject')}
            />
          </div>
          <div className='col-span-2'>
            <textarea
              placeholder='Write Comments'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              rows={4}
              {...register('comment')}
            ></textarea>
            <div className='mt-1 min-h-[17px] text-sm text-red-600'></div>
          </div>
          <div className='col-span-2'>
            <button
              onClick={handleClick}
              className='mt-6 w-full bg-blue/80 px-4 py-4 text-lg uppercase text-white outline-none transition-all duration-300 hover:bg-blue hover:duration-300'
            >
              Submit Now
            </button>
          </div>
        </div>
      </form>
      {showPopup && <PopupForm handleOverlayClick={handleOverlayClick} onClose={handleClose} />}
    </div>
  )
}
