import React from 'react'
import Gabi from '../../../assets/others/Gabriella.png'
import './FourthHome.css'
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'

function FourthHome() {

    const gabyRef = LazyLoad(true, { threshold: 0 })

    if(gabyRef.visible){
        const { current } = gabyRef.domRef
        HelpersFunction.LazyDisplay(current, '.six_bg', 'block')
        HelpersFunction.LazyDisplay(current, '.six_f_section', 'flex')
        HelpersFunction.LazyDisplay(current, '.six_s_section', 'flex')
    }

  return (
    <div className='six_container' ref={gabyRef.domRef}>
      <div className='six_bg'></div>
      <section className='six_sections six_f_section'>
        <div className='six_rg_t_container'>
          <h3>Any question?</h3>
          <p>
            Gabriella, our adviser its available to solve any question you have.
          </p>
        </div>
        <div className='six_rg_b_container'>
          <h3>Request form</h3>
          <div>
            <span>+43 6602069525</span>
            <span>or</span>
            <span>Gabriella@gmail.com</span>
          </div>
        </div>
      </section>
      <section className='six_sections six_s_section'>
        <picture>
          <img src={Gabi} alt='Gabriela' />
        </picture>
        <span>Gabriella Vesovic</span>
      </section>
    </div>
  )
}

export default FourthHome
