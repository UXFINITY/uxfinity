import React, { useEffect, useState } from 'react'

/*
!max: cantidad maxima a alcanzar
!count: cantidad de pasos para llegar a max
!time: tiempo total en llegar a max
!decimal: cantidad de decimales
*/
function NumberConter({ name = '', max, count, time = 1000, decimal = 1 }) {
  const [counter, setCounter] = useState(0)
  let interval
  useEffect(() => {
    const steps = max / count //10
    const intervalTime = time / count //200
    let total = 0

    interval = setInterval(() => {
      total += steps
      const entero = Math.round(total)
      setCounter(entero / decimal)
      if (total >= max) {
        setCounter(max / decimal)
        clearInterval(interval)
      }
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

  return <b className={name}>{counter}</b>
}

export default NumberConter
