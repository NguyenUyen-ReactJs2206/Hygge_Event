import { useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  content: string
  onClose: () => void
}
export default function PopupForm({ content, onClose }: Props) {
  return createPortal(
    <div className='fixed inset-0 z-[99999] h-[100vh] w-full bg-black text-center text-white' id='fullscreen'>
      <div>{content}</div>
      <button onClick={onClose}>X</button>
    </div>,
    document.body
  )
}
