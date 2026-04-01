"use client"

import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

type Props = {
  src: string
  alt?: string
  onLike?: () => void
  onNo?: () => void
  children?: React.ReactNode
}

export default function SwipeCard({ src, alt, onLike, onNo, children }: Props) {
  const [anim, setAnim] = useState<'idle' | 'like' | 'no' | null>(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setAnim('no')
      onNo?.()
      setTimeout(() => setAnim(null), 600)
    },
    onSwipedRight: () => {
      setAnim('like')
      onLike?.()
      setTimeout(() => setAnim(null), 600)
    },
  })

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      setAnim('like')
      onLike?.()
      setTimeout(() => setAnim(null), 600)
    } else if (e.key === 'ArrowLeft') {
      setAnim('no')
      onNo?.()
      setTimeout(() => setAnim(null), 600)
    }
  }

  return (
    <div {...handlers} tabIndex={0} onKeyDown={handleKey} className={`swipe-card ${anim ? 'anim-' + anim : ''}`}>
      <img src={src} alt={alt} />

      <button
        className="swipe-icon like"
        onClick={() => {
          setAnim('like')
          onLike?.()
          setTimeout(() => setAnim(null), 600)
        }}
        aria-label="like"
      >
        ♥
      </button>

      <button
        className="swipe-icon no"
        onClick={() => {
          setAnim('no')
          onNo?.()
          setTimeout(() => setAnim(null), 600)
        }}
        aria-label="no"
      >
        ✕
      </button>

      {children}
    </div>
  )
}
