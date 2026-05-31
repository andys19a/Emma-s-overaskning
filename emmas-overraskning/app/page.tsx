"use client"

import { useState } from "react"
import SwipeCard from "@/components/SwipeCard"

const profiles = [
  {
    name: "Emma",
    src: "/Emma.jpeg",
    age: 28,
    description: "Äventyrlig och varm! Alltid redo för nästa galna idé. 🌸",
    tags: ["Grafisk designer", "Resor", "Yoga"],
  },
  {
    name: "Sofia",
    src: "/Sofia.jpeg",
    age: 25,
    description: "Spontan och kreativ! Kommer garanterat hitta på något galet. 🎨",
    tags: ["Fotograf", "Natur", "Vinälskare"],
  },
  {
    name: "Lisa",
    src: "/Lisa.jpeg",
    age: 27,
    description: "Social och omtänksam! Alltid där för att sprida glädje. 🌟",
    tags: ["Eventplanerare", "Matlagning", "Hundälskare"],
  },
  {
    name: "Anna",
    src: "/Anna.jpeg",
    age: 29,
    description: "Rolig och energisk! Kommer garanterat göra dagen oförglömlig. 🎉",
    tags: ["Marknadsföring", "Dans", "Resor"],
  },
  {
    name: "Elin",
    src: "/Elin.jpeg",
    age: 26,
    description: "Intelligent och engagerad! Alltid redo för nya utmaningar. 📚",
    tags: ["Dataanalys", "Lärande", "Volontärarbete"],
  },
  // Lägg till fler profiler här
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)
  const [liked, setLiked] = useState<typeof profiles>([])

  const handleLike = () => {
    setLiked(prev => [...prev, profiles[index]])
    goNext()
  }

  const handleNo = () => {
    goNext()
  }

  const goNext = () => {
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
          <span className="heart">💕</span> Hitta dina babes <span className="heart">💕</span>
        </h1>
        <p className="page-subtitle">Swipa höger för att lägga till i gänget!</p>
        {!done && (
          <p className="page-counter">{index + 1} / {profiles.length}</p>
        )}
      </div>

      {done ? (
        <div className="done-screen">
          <p className="done-emoji">🎉</p>
          <h2 className="done-title">Klart!</h2>
  

          {liked.length > 0 && (
            <div className="done-liked">
              <p className="done-liked-label">Dina hjärtegull:</p>
              <div className="done-liked-list">
                {liked.map(p => (
                  <div key={p.name} className="done-liked-item">
                    <img src={p.src} alt={p.name} className="done-liked-img" />
                    <span className="done-liked-name">{p.name}, {p.age}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {liked.length === 0 && (
            <p className="done-none">Ingen kom med den här gången 😅</p>
          )}
        </div>
      ) : (
        <SwipeCard
          key={index}
          src={profiles[index].src}
          name={profiles[index].name}
          age={profiles[index].age}
          description={profiles[index].description}
          tags={profiles[index].tags}
          onLike={handleLike}
          onNo={handleNo}
        />
      )}
    </main>
  )
}
