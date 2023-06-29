type Props = {
  setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export default function PopUpSlideImages({ setIsPopupVisible }: Props) {
  const handleClosePopup = () => setIsPopupVisible(false)
  return (
    <div>
      <button onClick={handleClosePopup}>close</button>
    </div>
  )
}
