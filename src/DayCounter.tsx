import { useState, useEffect } from 'react'

const START_DATE = new Date('2025-09-03T18:30:00')

interface Elapsed {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getElapsed(start: Date): Elapsed {
  const diffMs = Date.now() - start.getTime()
  const totalSeconds = Math.floor(diffMs / 1000)

  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function pad(n: number): string {
  return n.toString().padStart(2, '0')
}

function DayCounter() {
  const [elapsed, setElapsed] = useState(() => getElapsed(START_DATE))

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(getElapsed(START_DATE))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="day-counter">
      Lilie Fleur and Raphaël counter
      <br />
      {elapsed.days} jour{elapsed.days === 1 ? '' : 's'}, {pad(elapsed.hours)} heure{elapsed.hours === 1 ? '' : elapsed.hours === 1 ? '' : 's'} {pad(elapsed.minutes)} minute{elapsed.hours === 1 ? '' : elapsed.hours === 1 ? '' : 's'} et {pad(elapsed.seconds)} seconde{elapsed.hours === 1 ? '' : elapsed.hours === 1 ? '' : 's'} passé ensemble
    </p>
  )
}

export default DayCounter