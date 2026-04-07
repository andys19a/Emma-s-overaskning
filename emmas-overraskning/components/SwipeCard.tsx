"use client"

import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

type Props = {
  src: string
  alt?: string
  name: string
  age: number
  description: string
  tags: string[]
  onLike?: () => void
  onNo?: () => void
}

export default function SwipeCard({ src, alt, name, age, description, tags, onLike, onNo }: Props) {
  const [anim, setAnim] = useState<'like' | 'no' | null>(null)

  const triggerLike = () => {
    if (anim) return
    setAnim('like')
    setTimeout(() => { setAnim(null); onLike?.() }, 450)
  }

  const triggerNo = () => {
    if (anim) return
    setAnim('no')
    setTimeout(() => { setAnim(null); onNo?.() }, 450)
  }

  const handlers = useSwipeable({
    onSwipedRight: triggerLike,
    onSwipedLeft: triggerNo,
    preventScrollOnSwipe: true,
  })

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') triggerLike()
    else if (e.key === 'ArrowLeft') triggerNo()
  }

  return (
    <div className="swipe-wrapper">
      <div
        {...handlers}
        tabIndex={0}
        onKeyDown={handleKey}
        className={`swipe-card${anim ? ' anim-' + anim : ''}`}
      >
        <div className="swipe-card-image">
          <img src={src} alt={alt ?? name} />
        </div>
        <div className="swipe-card-body">
          <h2 className="swipe-card-name">{name}, {age}</h2>
          <p className="swipe-card-desc">{description}</p>
          <div className="swipe-card-tags">
            {tags.map(tag => (
              <span key={tag} className="swipe-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="swipe-buttons">
        <button className="btn-no" onClick={triggerNo} aria-label="Nej">✕</button>
        <button className="btn-like" onClick={triggerLike} aria-label="Gilla">♥</button>
      </div>
    </div>
  )
}
