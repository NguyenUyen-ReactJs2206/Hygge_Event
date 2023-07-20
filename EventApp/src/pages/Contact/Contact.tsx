import { useTranslation } from 'react-i18next'
import FormContact from './components/FormContact'

export default function Contact() {
  const { t } = useTranslation('contact')
  return (
    <div className='contact-page' id='top'>
      <div className='py-32 lg:pt-40'>
        <div className='container mx-auto sm:max-w-[500px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1200px] twoXl:max-w-[1300px]'>
          <div className='grid-cols-12 md:grid'>
            <div className='col-span-12 flex items-center justify-center lg:col-span-4'>
              <div className='mx-4'>
                <div className='grid grid-cols-2'>
                  <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                    <div className='flex border-b border-b-blue/60 py-8'>
                      <div className='flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={2}
                          stroke='currentColor'
                          className='h-10 w-10'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                          />
                        </svg>
                      </div>
                      <div className='ml-4 break-normal text-slate-600'>
                        <h5 className='text-xl font-semibold'>{t('aside contact.office address')}</h5>
                        <p className='mt-2 text-lg'>{t('aside contact.address')}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                    <div className='flex border-b border-b-blue/60 py-8'>
                      <div className='flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={2}
                          stroke='currentColor'
                          className='h-10 w-10'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div className='ml-4 break-normal text-slate-600'>
                        <h5 className='text-xl font-semibold'>{t('aside contact.working hours')}</h5>
                        <p className='mt-2 text-lg'>{t('aside contact.hours')}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                    <div className='flex  py-8'>
                      <div className='flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={2}
                          stroke='currentColor'
                          className='h-10 w-10'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                          />
                        </svg>
                      </div>
                      <div className='ml-4 break-all text-slate-600'>
                        <h5 className='text-xl font-semibold'>{t('aside contact.message us')}</h5>
                        <p className='mt-2 text-lg'>{t('aside contact.message')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' col-span-12 lg:col-span-8'>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
