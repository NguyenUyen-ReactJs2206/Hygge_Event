type Props = {
  name: string
}
export default function ConceptDetail({ name }: Props) {
  return <div className='py-20'>{name}</div>
}
