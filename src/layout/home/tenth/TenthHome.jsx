import React from 'react'
import './TenthHome.css'
import Gian from '../../../assets/team/Gian.png'

function TenthHome() {
  return (
    <div className='t_container'>
      <section className='t_f_section'>
        <picture>
          <img src='' alt='' />
        </picture>
        <picture>
          <img src={Gian} alt='' />
        </picture>
      </section>
      <section className='t_s_section'>
        <div>
          <h2>
            Our team is going to provide you the best design code and and
            friendly attention
          </h2>
          <div></div>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default TenthHome
