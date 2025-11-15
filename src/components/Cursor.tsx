import { useEffect, useState } from 'react'

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Add new trail point
      setTrails(prev => [
        ...prev.slice(-8), // Keep only last 8 trails
        {
          id: trailId++,
          x: e.clientX,
          y: e.clientY,
          opacity: 1
        }
      ])
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setTrails([])
    }


    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Animate trail opacity
    const interval = setInterval(() => {
      setTrails(prev => 
        prev.map((trail, index) => ({
          ...trail,
          opacity: (prev.length - index) / prev.length * 0.3
        }))
      )

    }, 50)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearInterval(interval)
    }
  }, [])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isVisible ? 1 : 0})`
        }}
      />

      {/* Trail particles */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: trail.opacity
          }}
        />
      ))}

      
    </>
  )
}

export default Cursor