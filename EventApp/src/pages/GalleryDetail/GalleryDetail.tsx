type Props = {
  name: string
  listGalleryDetail: string[]
}

export default function GalleryDetail({ name, listGalleryDetail }: Props) {
  return <div className='py-20'>{name}</div>
}
