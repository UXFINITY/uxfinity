import React from 'react'

import './Nav.css'
import { useLanguage } from '../../helpers/LanguageContext'
import { useRef } from 'react'

function Nav() {
  const { setLanguage, AllData, setBgColor, bgColor } = useLanguage()
  //destructuring
  const { navData } = AllData

  const changeLanguage = useRef(null)

  const handleChange = (e) => {
    setLanguage(e.target.value)//'en' or 'es'
  }

  const handleBgColor = () => {
    setBgColor(!bgColor)//true or false
  }

  return (
    <nav className='nav-container'>
      <div className='nav-logo'>
        <strong>UX</strong>finiti
      </div>
      <ul className='nav-sections'>
        <li>{navData[0]}</li>
        <li>{navData[1]}</li>
        <li>{navData[2]}</li>
      </ul>
      <button className='nav-button'>{navData[3]}</button>
      <button className='nav-bg-color'>
        <div
          className={`nav-bg-circle ${bgColor && 'nav-bg-black'}`}
          onClick={handleBgColor}
        ></div>
      </button>
      <select
        name='language'
        id=''
        ref={changeLanguage}
        onChange={handleChange}
      >
        <option value='en'>en</option>
        <option value='es'>es</option>
      </select>
    </nav>
  )
}

export default Nav
