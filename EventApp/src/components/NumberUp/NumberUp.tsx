import CountUp from 'react-countup'

type Props = {
  number: number
}
export default function NumberUp({ number }: Props) {
  return (
    <CountUp start={0} end={number} duration={5}>
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  )
}
