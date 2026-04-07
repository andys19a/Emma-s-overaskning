"use client"

import { useState } from "react"
import SwipeCard from "@/components/SwipeCard"

const profiles = [
  {
    name: "Emma",
    src: "/Alm.jpeg",
    age: 28,
    yrke: "Grafisk designer",
    intressen: "Resor, matlagning, yoga",
    beskrivning:
      "En äventyrlig själ som älskar att utforska nya platser och kulturer. Hon är passionerad om matlagning och drömmer om att starta sin egen restaurang en dag.",
  },
  {
    name: "Sofia",
    src: "/Hardcore_60_ding.png",
    age: 25,
    yrke: "Fotograf",
    intressen: "Natur, musik, löpning",
    beskrivning:
      "Sofia älskar att fånga ögonblick med sin kamera och tillbringa helgerna ute i naturen. Hon spelar även gitarr och är alltid redo för ett nytt äventyr.",
  },
  // Lägg till fler profiler här
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  const next = () => {
    if (index + 1 < profiles.length) {
      setIndex(index + 1)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <main>
        <h1>Hitta din match</h1>
        <div className="card">
          <h2>Inga fler profiler!</h2>
          <p style={{ textAlign: "center", padding: "2rem" }}>
            Du har sett alla profiler.
          </p>
        </div>
      </main>
    )
  }

  const profile = profiles[index]

  return (
    <main>
      <h1>Hitta din match</h1>

      <div className="card">
        <h2>{profile.name}</h2>

        <SwipeCard
          key={index}
          src={profile.src}
          alt={profile.name}
          onLike={next}
          onNo={next}
        />



        <div className="profil">
          <ul>
            <li><strong>Ålder:</strong> {profile.age} år</li>
            <li><strong>Yrke:</strong> {profile.yrke}</li>
            <li><strong>Intressen:</strong> {profile.intressen}</li>
          </ul>
        </div>
      </div>
      <div className="beskrivning">
        <p>{profile.beskrivning}</p>
      </div>
    </main>
  )
}
