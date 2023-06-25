type Props = {
  color: string
}

export default function UnderLineEffect({ color }: Props) {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-${color} transition-all  duration-500 group-hover:w-full group-hover:duration-500`}
      ></div>
    </>
  )
}
