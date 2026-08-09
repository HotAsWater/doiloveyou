import { useState, useEffect, useRef, type ReactNode } from 'react'
import './PasswordGate.css'

const PASSWORD = 'feunard' // <- set this

interface Props {
  children: ReactNode
}



function PasswordGate({ children }: Props) {
  const [unlocked, setUnlocked] = useState(false)
  const [closing, setClosing] = useState(false)
  const [gone, setGone] = useState(false)
  const [input, setInput] = useState('')
  const [shake, setShake] = useState(false)

  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (wrapRef.current) {
        wrapRef.current.style.setProperty('--mx', `${e.clientX}px`)
        wrapRef.current.style.setProperty('--my', `${e.clientY}px`)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      setUnlocked(true)
      setClosing(true)
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 400)
    }
  }

  return (
    <>
      {children}

      {!gone && (
        <div
          className={`curtain-wrap ${closing ? 'curtain-wrap--open' : ''}`}
          onTransitionEnd={() => {
            if (closing) setGone(true)
          }}
        >
          <div className="curtain curtain--left" />
          <div className="curtain curtain--right" />
          <div className="curtain-spotlight" />

          {!unlocked && (
            <form className={`gate-form ${shake ? 'gate-form--shake' : ''}`} onSubmit={handleSubmit}>
              <label className="gate-label" htmlFor="gate-password">
                a ton avis...
              </label>
              <input
                id="gate-password"
                type="password"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="gate-input"
              />
              <button type="submit" className="gate-button">
                Entrer
              </button>
            </form>
          )}
        </div>
      )}
    </>
  )
}

export default PasswordGate