import React, { useRef } from 'react'
import './NinethHome.css'
import Gian from '../../../assets/team/Gian.png'
import Beja from '../../../assets/team/Beja.png'
import Hands from '../../../assets/team/hands.png'
import { useBodyContext } from '../../../helpers/BodyContext'
import emailjs from '@emailjs/browser'

function NinethHome({ service, template, user }) {
  const form = useRef(null)

  const { AllData } = useBodyContext()
  const { homeNinethData } = AllData

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(service, template, form.current, user).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

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
            <form ref={form} onSubmit={sendEmail} className='form'>
              <div>
                <label htmlFor='name'>First and last name*</label>
                <input name='name' id='name' type='text' maxLength={20} />
              </div>
              <div>
                <label htmlFor='company'>Company</label>
                <input name='company' id='company' type='text' />
              </div>
              <div>
                <label htmlFor='email'>E-mail*</label>
                <input name='email' id='email' type='text' />
              </div>
              <div>
                <label htmlFor='phone'>Phone number</label>
                <div className='form_phone'>
                  <input
                    name='cc'
                    id='cc'
                    type='number'
                    min={0}
                  />

                  <input name='phone' id='phone' type='number' maxLength={3} />
                </div>
              </div>
              <div>
                <label htmlFor='textClient'>
                  How can we help you in your project*
                </label>
                <textarea name='message' id='textClient' />
              </div>
              <input className='button_blue button_action' type='submit' value='Send' />
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
