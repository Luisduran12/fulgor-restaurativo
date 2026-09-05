import { useEffect, useState } from 'react'

/** Anima un número de 0 al valor objetivo cuando `start` pasa a true. */
export function useCountUp(target, { start = false, duration = 1500 } = {}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start || typeof target !== 'number') return undefined

    let frame
    const startTime = performance.now()

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return count
}
