import React, { useRef, useState } from 'react'
import './NinethHome.css'
import Gian from '../../../assets/team/Gian.png'
import Beja from '../../../assets/team/Beja.png'
import Hands from '../../../assets/team/hands.png'
import { useBodyContext } from '../../../helpers/BodyContext'
import emailjs from '@emailjs/browser'
import FormConfirm from '../../../components/FormConfirm'
import { validateForm } from '../../../helpers/validateForm'
import { useReducer } from 'react'
import { createPortal } from 'react-dom'
import ModalError from '../../../components/ModalError'

const formModel = {
  name: '',
  company: '',
  email: '',
  cc: '',
  phone: '',
  message: ''
}

const formok = {
  view: false,
  loading: false,
  validation: true
}

const formerror = {
  view: false,
  loading: false,
  validation: false
}

const checkForm = {
  view: false,
  loading: true,
  validation: false
}

const formAfterChecking = {
  name: false,
  company: false,
  email: false,
  cc: false,
  phone: false,
  message: false
}

const changeState = (state, action) => {
  if (action.value === 0) {
    return formAfterChecking
  }
  if (action.value === 1) {
    let objectSecondary = {}
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        objectSecondary = { ...objectSecondary, [key]: true }
      }
    }
    return objectSecondary
  }

  if (action.value === 2) {
    return { email: true }
  }

  if (action.value === 3) {
    return { cc: true }
  }
  if (action.value === 4) {
    return { phone: true }
  }
  if (action.value === 5) {
    return { message: true }
  }

  throw Error('Accion desconocida')
}

function NinethHome({ service, template, user }) {
  const form = useRef(null)
  const [formData, setFormData] = useState(formModel)
  const [modal, setModal] = useState(checkForm)
  const { AllData } = useBodyContext()
  const [portalView, setPortalView] = useState(false)
  const [state, dispatch] = useReducer(changeState, formAfterChecking)
  const { homeNinethData } = AllData

  const obtainData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    const btn_submit = Array.from(e.target)[6]
    btn_submit.disabled = true
    btn_submit.style.backgroundColor = 'gray'

    setTimeout(() => {
      btn_submit.disabled = false
      btn_submit.style.backgroundColor = ''
    }, 3000)

    const response = validateForm(formData)
    dispatch({ value: response })

    try {
      // throw new Error('Error')
      if (response !== 0) {
        setModal({ ...checkForm, view: true })
        setTimeout(() => {
          setModal({ view: true, loading: false, validation: false })
        }, 10)

        setTimeout(() => {
          setModal(formerror)
        }, 3000)
        return
      }

      console.log('response ok 3✅')
      const data = await emailjs.sendForm(service, template, form.current, user)
      const { status, text } = data
      if (status === 200) {
        setModal({ view: true, loading: false, validation: true })
        setTimeout(() => {
          setModal(formok)
        }, 3000)
      }
    } catch (error) {
      setPortalView(true)
      console.log('No se pudo enviar el correo ❌')
    }
  }

  return (
    <div className='nin_container'>
      {portalView &&
        createPortal(
          <ModalError state={setPortalView} />,
          document.getElementById('modal_error')
        )}
      <FormConfirm
        view={modal.view}
        loading={modal.loading}
        validation={modal.validation}
      />
      <div className='nin_f_container' id='form_mail'>
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
                <input
                  className={state.name ? 'bb_red' : ''}
                  onChange={obtainData}
                  name='name'
                  id='name'
                  type='text'
                  maxLength={20}
                />
              </div>
              <div>
                <label htmlFor='company'>Company</label>
                <input
                  className={state.company ? 'bb_red' : ''}
                  onChange={obtainData}
                  name='company'
                  id='company'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='email'>E-mail*</label>
                <input
                  className={state.email ? 'bb_red' : ''}
                  onChange={obtainData}
                  name='email'
                  id='email'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='phone'>Phone number</label>
                <div className='form_phone'>
                  <input
                    className={state.cc ? 'bb_red' : ''}
                    onChange={obtainData}
                    name='cc'
                    id='cc'
                    type='number'
                    min={0}
                  />

                  <input
                    className={state.phone ? 'bb_red' : ''}
                    onChange={obtainData}
                    name='phone'
                    id='phone'
                    type='number'
                    maxLength={3}
                  />
                </div>
              </div>
              <div>
                <label htmlFor='textClient'>
                  How can we help you in your project*
                </label>
                <textarea
                  className={state.message ? 'bb_red' : ''}
                  onChange={obtainData}
                  name='message'
                  id='textClient'
                  minLength={15}
                />
              </div>
              <input
                className='button_blue button_action'
                type='submit'
                value='Send'
              />
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
