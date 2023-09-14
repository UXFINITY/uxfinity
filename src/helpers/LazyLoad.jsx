import { useState } from 'react'
import { useEffect, useRef } from 'react'

function LazyLoad(disconnect = true, options) {
  const domRef = useRef(null) // Referencia para el elemento DOM
  const [visible, setVisible] = useState(false) // Referencia para el estado de intersección

  useEffect(() => {
    // Creamos el observador de intersección
    if (window.innerWidth < 1200) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting
      setVisible(isIntersecting)
      if (visible && disconnect) {
        observer.disconnect()
      }
    }, options)

    if (domRef.current && window.innerWidth > 1200) {
      observer.observe(domRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [options, disconnect])

  return { domRef, visible }
}
export default LazyLoad
