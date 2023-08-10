import './App.css'
// import SliderHeader from './pages/header/SliderHeader'
// import Home from './pages/home/Home'
import { useBodyContext } from './helpers/BodyContext'
import video from './assets/uxFinityIntro.mp4'
import { useEffect, useRef } from 'react'
import Nav from './layout/nav/Nav'
import Header from './layout/header/Header'
function App() {
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
    setTimeout(() => {
      videoIntro.current.style.display = 'none'
    }, 3500)
  }, [])

  return (
    <div className='App'>
      <video className='videoIntro' src={video} ref={videoIntro} muted></video>
      <Nav />
      <Header />
      {/* <SliderHeader />
      <Home /> */}
    </div>
  )
}

export default App
