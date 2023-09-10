import React, { useEffect, useState } from 'react'
import './FifthHome.css'
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'
import { useBodyContext } from '../../../helpers/BodyContext'
function FifthHome() {
  const { AllData } = useBodyContext()
  const { homeFifthData } = AllData

  const ftRef = LazyLoad(false, { threshold: 0.1 })

  if (ftRef.visible) {
    HelpersFunction.LazyDisplay(
      ftRef.domRef.current,
      '.ft_noneToBlock',
      'block'
    )
    HelpersFunction.LazyDisplay(ftRef.domRef.current, '.ft_noneToFlex', 'flex')
  } else {
    HelpersFunction.LazyDisplay(ftRef.domRef.current, '.ft_noneToBlock', 'none')

    HelpersFunction.LazyDisplay(ftRef.domRef.current, '.ft_noneToFlex', 'none')
  }

  return (
    <div className='ft_container' ref={ftRef.domRef}>
      <section className='ft_items_container'>
        <div className='ft_items ft_text'>
          <h3 className='ft_noneToBlock'>{homeFifthData.s_title}</h3>
          <h2>{homeFifthData.f_title}</h2>
          <p className='ft_noneToBlock'>
           {homeFifthData.description[0]}
            <span className='ft_items_sub'>
            {homeFifthData.description[1]}
            </span>
          </p>
        </div>
        <div className='ft_items ft_buttons ft_noneToFlex'>
          <button>{homeFifthData.buttons[0]}</button>
          <button>{homeFifthData.buttons[1]}</button>
          <button>{homeFifthData.buttons[2]}</button>
        </div>
      </section>
    </div>
  )
}

export default FifthHome
