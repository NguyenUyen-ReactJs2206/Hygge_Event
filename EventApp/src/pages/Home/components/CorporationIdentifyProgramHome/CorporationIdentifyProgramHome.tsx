type Props = {
  nameCip: string
  descriptionCip: string
}
export default function CorporationIdentifyProgramHome({ nameCip, descriptionCip }: Props) {
  return (
    <div>
      <div className='px-1 text-center sm:px-6 md:px-2 lg:px-8'>
        <h3 className='mb-3 font-semibold uppercase tracking-wider text-blue md:text-xl lg:text-2xl'>{nameCip}</h3>
        <p>{descriptionCip}</p>
      </div>
    </div>
  )
}
