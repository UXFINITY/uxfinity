import React from 'react'
import './ThirdHome.css'
import { useBodyContext } from '../../../helpers/BodyContext'
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'
function ThirdHome() {
  //lazyload
  const f_section = LazyLoad(true, { threshold: 0 })
  const s_section = LazyLoad(true, { threshold: 0 })
  const t_section = LazyLoad(true, { threshold: 0 })

  const { AllData } = useBodyContext()
  const { homeSecondData } = AllData

  const localFunction = (element, className, change) => {
    const { current } = element.domRef
    HelpersFunction.LazyDisplay(current, `.${className}`, change)
  }

  if (f_section.visible) {
    localFunction(f_section, 't_f_picture', 'block')
    localFunction(f_section, 't_f_txt', 'block')
  }

  if (s_section.visible) {
    localFunction(s_section, 't_s_picture', 'block')
    localFunction(s_section, 't_s_txt', 'block')
  }

  if (t_section.visible) {
    localFunction(t_section, 't_t_picture', 'block')
    localFunction(t_section, 't_t_txt', 'block')
  }

  //   else {
  //     const { current } = t_section.domRef
  //     HelpersFunction.LazyDisplay(current, '.t_f_picture', 'none')
  //   }

  return (
    <div className='t_container'>
      <section className='t_sections t_f_section' ref={f_section.domRef}>
        <picture className='t_f_picture tft_left'>
          <img src={homeSecondData[0].img[0]} alt='' />
          <img src={homeSecondData[0].img[1]} alt='' />
          <img src={homeSecondData[0].img[2]} alt='' />
        </picture>
        <div className='tft_rigth t_f_txt'>
          <h3>Morfi</h3>
          <p>
            Morfi is a Web App project designed to make easier the table reserve
            process, connecting client with restaurants, and helping the
            restaurants to have control of their reserves, created to be a easy
            to use platform with just a couple steps.
          </p>
        </div>
      </section>
      <section className='t_sections t_s_section' ref={s_section.domRef}>
        <div className='t_s_txt tft_left'>
          <h3>4 road 4 you</h3>
          <p>
            A E-comer that offer to their clients reparation and Auto-parts with
            the best quality on the market.
          </p>
        </div>
        <picture className=' tft_rigth t_s_picture'>
          <img src={homeSecondData[1].img} alt='' />
        </picture>
      </section>
      <section className='t_sections t_t_section' ref={t_section.domRef}>
        <picture className='t_t_picture tft_left'>
          <img src={homeSecondData[2].img[0]} alt='' />
          <img src={homeSecondData[2].img[1]} alt='' />
          <img src={homeSecondData[2].img[2]} alt='' />
        </picture>
        <div className=' t_t_txt tft_rigth'>
          <h3>Power fit</h3>
          <p>
            A platform to have a control over your gym, create events, create
            and cancel memberships, make a schedule and more, create training
            plans to your users and more.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ThirdHome
