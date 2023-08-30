import React from 'react'
import './NinethHome.css'
import Gian from '../../../assets/team/Gian.png'
import Beja from '../../../assets/team/Beja.png'

function NinethHome() {
  return (
    <div className='nin_container'>
      <div className='nin_f_container'>
        <section className='nin_f_section'>
          <picture>
            <img src={Beja} alt='Bejarano uxfinity' />
          </picture>
          <picture>
            <img src={Gian} alt='Gianfranco uxfinity' />
          </picture>
        </section>
        <section className='nin_s_section'>
          <section className='nis_s_formContainer'>
            <h2>
              Our team is going to provide you the best design code and and
              friendly attention
            </h2>
            <form></form>
          </section>
          <section className='nin_s_imgContainer'></section>
        </section>
      </div>
    </div>
  )
}

export default NinethHome
