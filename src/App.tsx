import top_img from './assets/snoopy-hug-main.png'
import LetterDrawer from './LetterDrawer'
import DayCounter from './DayCounter'
import './App.css'

function App() {

  return (
    <div className="page">

      <DayCounter />      

      <img src={top_img} alt="" style={{ maxWidth: '300px' }} />

      <h1 className="title">Ma manière de fair des lettre d'amour</h1>
      <p className="subtitle">C'est que le debut...</p>

      <LetterDrawer />

    </div>
  )
}

export default App
