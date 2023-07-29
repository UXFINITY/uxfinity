import { useState } from 'react'
import './App.css'
import SliderHeader from './pages/header/SliderHeader'
import video from './assets/header/header-bg.mp4'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
      <SliderHeader/>
            <Home />
    </div>
  )
}

export default App
