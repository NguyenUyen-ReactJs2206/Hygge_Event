import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from 'src/utils/rules'
import { toast } from 'react-toastify'
import './index.css'
export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: Schema) => {
    if (data) {
      toast.success(
        `Email sent successfully.
      We have received your email and will get back to you soon.
      Thank you`,
        {
          autoClose: 3000,
          className: 'toast-success'
        }
      )
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
        <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Your Name'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('name')}
            />
            <div className='mt-1 min-h-[17px] text-sm text-red-600'></div>
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Email'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('email')}
            />
            <div className='text- mt-1 min-h-[17px] text-left text-sm text-red-600'>{errors.email?.message}</div>
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Phone Number'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('phone')}
            />
            <div className='mt-1 min-h-[17px] text-sm text-red-600'></div>
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Subject'
              type='text'
              className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
              {...register('subject')}
            />
            <div className='mt-1 min-h-[17px] text-sm text-red-600'></div>
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
            <button className='mt-6 w-full bg-blue/80 px-4 py-4 text-lg uppercase text-white outline-none transition-all duration-300 hover:bg-blue hover:duration-300'>
              Submit Now
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
