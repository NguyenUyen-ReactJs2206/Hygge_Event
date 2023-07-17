import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { rules } from 'src/utils/rules'
import PopupForm from '../PopupForm'

export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors }
  } = useForm()
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const onSubmit = (data: any) => {
    console.log(data)
  }
  const handleClick = () => {
    console.log(errors)
    if (touchedFields.email) {
      if (errors.email?.message && errors.email?.message !== '') {
        setModalContent(`${errors.email.message}`)
        setModalOpen(true)
      }
      if (!errors.email?.message && errors.email?.message !== '') {
        setModalContent('Success')
        setModalOpen(true)
      }
    }
  }
  const handleClose = () => {
    setModalOpen(false)
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
              {...register('email', rules.email)}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Phone Number'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('phone', rules.phone)}
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
      {isModalOpen && <PopupForm content={modalContent} onClose={handleClose} />}
    </div>
  )
}
