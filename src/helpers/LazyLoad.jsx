import { useState } from 'react'
import { useEffect, useRef } from 'react'

function LazyLoad(disconnect = true, options) {
  // const domRef = useRef()
  // const intersection= useRef()
  // let observer

  // const callbackFunction = (entries) => {
  //   // output me devuelve el true or false
  //   const output = entries[0].isIntersecting
  //   intersection.current = output

  //   if (output) {
  //     func(domRef.current)
  //   }

  //   if (output && unObs) {
  //     observer.disconnect()
  //   }
  // }

  // useEffect(() => {
  //   observer = new IntersectionObserver(callbackFunction, options)
  //   observer.observe(domRef.current)
  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [])

  // return {domRef,visible:intersection.current}

  const domRef = useRef(null) // Referencia para el elemento DOM
  const [visible , setVisible] = useState(false) // Referencia para el estado de intersección

  useEffect(() => {
    // Creamos el observador de intersección
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting
      setVisible(isIntersecting) 
      if (visible && disconnect) {
        observer.disconnect() 
      }
    }, options)

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [options, disconnect])

  return { domRef, visible }
}
export default LazyLoad
