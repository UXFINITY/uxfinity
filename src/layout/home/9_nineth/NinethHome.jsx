import React from 'react'
import './NinethHome.css'
import Gian from '../../../assets/team/Gian.png'
import Beja from '../../../assets/team/Beja.png'
import Hands from '../../../assets/team/hands.png'
import { useBodyContext } from '../../../helpers/BodyContext'

function NinethHome() {

  const { AllData } = useBodyContext()
  const { homeNinethData } = AllData

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
            <form className='form'>
              <div>
                <label htmlFor='name'>First and last name*</label>
                <input id='name' type='text' />
              </div>
              <div>
                <label htmlFor='company'>Company</label>
                <input id='company' type='text' />
              </div>
              <div>
                <label htmlFor='email'>E-mail*</label>
                <input id='email' type='text' />
              </div>
              <div>
                <label htmlFor='phone'>Phone number</label>
                <input id='phone' type='text' />
              </div>
              <div>
                <label htmlFor='textClient'>
                  How can we help you in your project*
                </label>
                <textarea id='textClient' />
              </div>
            </form>
          </section>
          <section className='nin_s_imgContainer'>
            <picture>
              <img src={Hands} alt='' />
              <span>Effort that works</span>
            </picture>
          </section>
        </section>
      </div>
    </div>
  )
}

export default NinethHome
