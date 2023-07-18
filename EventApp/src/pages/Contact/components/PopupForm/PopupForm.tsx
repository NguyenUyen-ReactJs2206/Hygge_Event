/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  content: string
  onClose: () => void
  handleOverlayClick: (event: any) => void
}
export default function PopupForm({ content, onClose, handleOverlayClick }: Props) {
  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={handleOverlayClick}
      className='fixed inset-0 z-[99999] w-full overflow-hidden bg-slate-400/30 text-center text-white'
    >
      <div className='h-fit w-fit bg-orange-700'>
        <div>{content}</div>
        <button onClick={onClose}>X</button>
      </div>
    </div>,
    document.body
  )
}
