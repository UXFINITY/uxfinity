import React, { useEffect, useState } from 'react'
import './Header.css'
import { useBodyContext } from '../../helpers/BodyContext'
import ArrowDown from '../../assets/header/Group.svg'
function Header() {
  const { AllData } = useBodyContext()
  const { headerData } = AllData

  const [toggleBefore, setToggleBefore] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setToggleBefore(true)
    }, 1000)
  }, [])

  return (
    <div className='header_container'>
      <div className='header_box'>
        <p>{headerData[0]}</p>
        <h1>
          {headerData[1]}
          <span className={toggleBefore ? 'header_before' : ''}>
            {headerData[2]}
          </span>
        </h1>
        <button className='nav_button-change'>Lets make it happen</button>
      </div>
      <i>
        <img src={ArrowDown} alt='ArrowDown' />
        <img src={ArrowDown} alt='ArrowDown' />
      </i>
    </div>
  )
}

export default Header
