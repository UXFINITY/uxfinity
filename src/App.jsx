import { useEffect, useState, useRef } from 'react'
import './App.css'
// files and helpers
import { useBodyContext } from './helpers/BodyContext'
import video from './assets/uxFinityIntro.mp4'
// components
import Nav from './layout/nav/Nav'
import Header from './layout/header/Header'
import FirstHome from './layout/home/first/FirstHome'
import SecondHome from './layout/home/second/SecondHome'

function App() {
  const [render, setRender] = useState(false)
  const { bgColor } = useBodyContext()
  const videoIntro = useRef(null)
  if (bgColor) {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
  } else {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
  }

  // efecto para darle play y ocultar el elemento
  useEffect(() => {
    if (videoIntro.current) {
      videoIntro.current.playbackRate = 3
      videoIntro.current.play()
    }
  }, [])

  const handleRender = () => {
    setRender(true)
  }

  return (
    <>
      {!render ? (
        <video
          className='videoIntro'
          src={video}
          ref={videoIntro}
          muted
          onEnded={handleRender}
        ></video>
      ) : (
        <div className='App'>
          <Nav />
          <Header />
          <FirstHome />
          <SecondHome />
        </div>
      )}
    </>
  )
}

export default App
