export default function HorizontalLineEffect() {
  return (
    <>
      <div className='absolute left-0 top-0 h-[1px] w-[12px] bg-black'></div>
      <div className='absolute left-0 top-0 h-[12px] w-[1px] bg-black'></div>
      <div className='absolute bottom-0 right-0 h-[1px] w-[12px] bg-black'></div>
      <div className='absolute bottom-0 right-0 h-[12px] w-[1px] bg-black'></div>
      <div className='absolute left-[12px] top-0 h-[1px] w-0 bg-black transition-all  duration-700 group-hover:w-[30%] group-hover:duration-700'></div>
      <div className='absolute bottom-0 right-[12px] h-[1px] w-0 bg-black transition-all  duration-700 group-hover:w-[30%] group-hover:duration-700'></div>
      <div className='absolute left-0 top-[12px] h-0 w-[1px] bg-black transition-all  duration-700 group-hover:h-[30%] group-hover:duration-700'></div>
      <div className='absolute bottom-0 right-[0] h-[12px] w-[1px] bg-black transition-all  duration-700 group-hover:h-[30%] group-hover:duration-700'></div>
    </>
  )
}
