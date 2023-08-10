import React from 'react'
import './Header.css'
import { useBodyContext } from '../../helpers/BodyContext'
import ArrowDown from '../../assets/header/Group.svg'
function Header() {
  const { AllData } = useBodyContext()
  //destructuring
  const { headerData } = AllData

  return (
    <div className='header_container'>
      <div className='header_box'>
        <p>{headerData[0]}</p>
        <h1>
          {headerData[1]}
          <span className={true && 'header_before'}>{headerData[2]}</span>
        </h1>
      </div>
      <i>
        <img src={ArrowDown} alt='ArrowDown' />
        <img src={ArrowDown} alt='ArrowDown' />
      </i>
    </div>
  )
}

export default Header
