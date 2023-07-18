/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  onClose: () => void
  handleOverlayClick: (event: any) => void
}
export default function PopupForm({ onClose, handleOverlayClick }: Props) {
  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={handleOverlayClick}
      className='fixed inset-0 z-[99999] flex h-[100vh] w-full items-center justify-center overflow-hidden bg-slate-400/30 text-center text-white'
    >
      <div className=' max- bg-orange-700'>
        <div>content</div>
        <button onClick={onClose}>X</button>
      </div>
    </div>,
    document.body
  )
}
