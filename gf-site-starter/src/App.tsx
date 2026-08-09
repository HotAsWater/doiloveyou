import { useState } from 'react'
import './App.css'

const THINGS = [
  { id: 'note', label: 'Click me for a note' },
  { id: 'photo', label: 'Click me for a memory' },
  { id: 'reason', label: 'Click me for a reason I love you' },
  { id: 'surprise', label: '???' },
]

function App() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="page">
      <div className="dog">
        <div className="dog__ear dog__ear--left" />
        <div className="dog__ear dog__ear--right" />
        <div className="dog__head" />
        <div className="dog__nose" />
      </div>

      <h1 className="title">For You</h1>
      <p className="subtitle">a little pink-and-blue corner of the internet, just for you</p>

      <div className="card-grid">
        {THINGS.map((thing) => (
          <button
            key={thing.id}
            className={`card ${active === thing.id ? 'card--active' : ''}`}
            onClick={() => setActive(thing.id)}
          >
            {thing.label}
          </button>
        ))}
      </div>

      {active && (
        <p className="footer-note">
          you clicked "{THINGS.find((t) => t.id === active)?.label}" — swap this placeholder
          text for the real content later.
        </p>
      )}
    </div>
  )
}

export default App
