type Props = {
  name: string
  listConcept: string[]
}
export default function ConceptDetail({ name, listConcept }: Props) {
  return <div className='py-20'>{name}</div>
}
