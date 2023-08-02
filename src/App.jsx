import './App.css'
import SliderHeader from './pages/header/SliderHeader'
import Home from './pages/home/Home'
import { useLanguage } from './helpers/LanguageContext'

function App() {
  const { bgColor } = useLanguage()

  if (bgColor) {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
  } else {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
  }

  return (
    <div className='App'>
      <SliderHeader />
      <Home />
    </div>
  )
}

export default App
