import React, { useEffect, useState } from 'react'
import './FouthHome.css'
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'
function FouthHome() {
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
          <h3 className='ft_noneToBlock'>Your MVP in 30 days</h3>
          <h2>your idea into prototype in 30 days</h2>
          <p className='ft_noneToBlock'>
            Instead of jumping into long and expensive development processes, we
            build out the initial prototype in a way that allows to either
            change it quickly, or scale it with
            <span className='ft_items_sub'>additional technologies when necessary.*</span>
          </p>
        </div>
        <div className='ft_items ft_buttons ft_noneToFlex'>
          <button>First muck ups ready in 1 week 📧</button>
          <button>We can start in the next 2 days or less 👨‍💻</button>
          <button>Prototye in 30 days🚀</button>
        </div>
      </section>
    </div>
  )
}

export default FouthHome
