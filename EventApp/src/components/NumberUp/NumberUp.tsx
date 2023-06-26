import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

type Props = {
  number: number
}
export default function NumberUp({ number }: Props) {
  const [count, setCount] = useState(number)

  useEffect(() => {
    setTimeout(() => {
      setCount(100)
    }, 10000)
  }, [])

  return <CountUp start={count} end={number} duration={4} />
}
