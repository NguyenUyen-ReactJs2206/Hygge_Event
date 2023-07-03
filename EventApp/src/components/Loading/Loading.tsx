import { PulseLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='flex h-[100vh] items-center justify-center text-center'>
      <PulseLoader color='#0073B5' size={20} speedMultiplier={0.7} />
    </div>
  )
}
