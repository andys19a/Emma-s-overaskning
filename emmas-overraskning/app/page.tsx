"use client"

import { useState } from "react"
import SwipeCard from "@/components/SwipeCard"

const profiles = [
  {
    name: "Emma",
    src: "/Alm.jpeg",
    age: 28,
    description: "Äventyrlig och varm! Alltid redo för nästa galna idé. 🌸",
    tags: ["Grafisk designer", "Resor", "Yoga"],
  },
  {
    name: "Sofia",
    src: "/Hardcore_60_ding.png",
    age: 25,
    description: "Spontan och kreativ! Kommer garanterat hitta på något galet. 🎨",
    tags: ["Fotograf", "Natur", "Vinälskare"],
  },
  // Lägg till fler profiler här
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  const next = () => {
    if (index + 1 < profiles.length) {
      setIndex(i => i + 1)
    } else {
      setDone(true)
    }
  }

  return (
    <main>
      <div className="page-header">
        <h1 className="page-title">
          <span className="heart">💕</span> Möhippa Swipe <span className="heart">💕</span>
        </h1>
        <p className="page-subtitle">Swipa höger för att lägga till i gänget!</p>
        {!done && (
          <p className="page-counter">{index + 1} / {profiles.length}</p>
        )}
      </div>

      {done ? (
        <div className="swipe-card done-card">
          <div className="swipe-card-body" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <p style={{ fontSize: '3rem' }}>🎉</p>
            <h2 className="swipe-card-name">Klart!</h2>
            <p className="swipe-card-desc">Du har sett alla i gänget.</p>
          </div>
        </div>
      ) : (
        <SwipeCard
          key={index}
          src={profiles[index].src}
          name={profiles[index].name}
          age={profiles[index].age}
          description={profiles[index].description}
          tags={profiles[index].tags}
          onLike={next}
          onNo={next}
        />
      )}
    </main>
  )
}
