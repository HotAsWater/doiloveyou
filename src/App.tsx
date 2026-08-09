import { useState } from 'react'
import top_img from './assets/snoopy-hug-main.png'
import LetterDrawer from './LetterDrawer'
import DayCounter from './DayCounter'
import './App.css'

const THINGS = [
  { id: 'note', label: 'Mon plus gros regret' },
  { id: 'photo', label: 'Click me for a memory' },
  { id: 'reason', label: 'Click me for a reason I love you' },
  { id: 'surprise', label: '???' },
]

function App() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="page">

      <DayCounter />      

      <img src={top_img} alt="" style={{ maxWidth: '300px' }} />

      <h1 className="title">Do I Love You?</h1>
      <p className="subtitle">I'll let you decide</p>

      <LetterDrawer />

    </div>
  )
}

export default App
