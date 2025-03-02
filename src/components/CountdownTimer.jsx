import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const conferenceDate = new Date('June 25, 2025 00:00:00').getTime()
    const now = new Date().getTime()
    const difference = conferenceDate - now

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed w-full z-40 top-20 bg-black text-white py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-8 text-center">
          <span className="nav-link">CONFERENCE STARTS IN:</span>
          <div className="flex space-x-4">
            <div>
              <span className="text-xl font-bold">{timeLeft.days}</span>
              <span className="text-sm ml-1">days</span>
            </div>
            <div>
              <span className="text-xl font-bold">{timeLeft.hours}</span>
              <span className="text-sm ml-1">hrs</span>
            </div>
            <div>
              <span className="text-xl font-bold">{timeLeft.minutes}</span>
              <span className="text-sm ml-1">min</span>
            </div>
            <div>
              <span className="text-xl font-bold">{timeLeft.seconds}</span>
              <span className="text-sm ml-1">sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
