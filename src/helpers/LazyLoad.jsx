import { useRef, useState, useEffect } from 'react'

export function LazyLoad() {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef()

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const callbackFunction = (entries) => {
    entries.forEach((entry) => setIsVisible(entry.isIntersecting))
  }

  const observer = new IntersectionObserver(callbackFunction, options)

  observer.observe(domRef.current)

  if (isVisible) {
    console.log('visible')
  } else {
    console.log('not visible')
  }

  return domRef
}
