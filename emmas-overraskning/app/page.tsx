import SwipeCard from "@/components/SwipeCard"

export default function Home() {
  return (
    <main>
      <h1>Hitta din match</h1>

      <div className="card">
        <h2>Emma</h2>

        <SwipeCard src="/Alm.jpeg" alt="Emma">
        </SwipeCard>

        <div className="profil">
          <ul>
            <li><strong>Ålder:</strong> 28 år</li>
            <li><strong>Yrke:</strong> Grafisk designer</li>
            <li><strong>Intressen:</strong> Resor, matlagning, yoga</li>
          </ul>
        </div>
          </div>
          <div className="beskrivning">
          <p>En äventyrlig själ som älskar att utforska nya platser och kulturer. Hon är passionerad om matlagning och drömmer om att starta sin egen restaurang en dag.</p>   
        </div>
    </main>
  )
}