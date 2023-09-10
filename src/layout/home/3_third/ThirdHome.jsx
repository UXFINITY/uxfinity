import React from 'react'
import './ThirdHome.css'
import { useBodyContext } from '../../../helpers/BodyContext'
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'
function ThirdHome() {
  //language
  const { AllData } = useBodyContext()
  const { homeThirdData } = AllData

  //lazyload
  const f_section = LazyLoad(true, { threshold: 0 })
  const s_section = LazyLoad(true, { threshold: 0 })
  const t_section = LazyLoad(true, { threshold: 0 })

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

  return (
    <div className='t_container'>
      <section className='t_sections t_f_section' ref={f_section.domRef}>
        <picture className='t_f_picture tft_left'>
          <img src={homeThirdData[0].img[0]} alt='uxfinity morfi' />
          <img src={homeThirdData[0].img[1]} alt='uxfinity morfi' />
          <img src={homeThirdData[0].img[2]} alt='uxfinity morfi' />
        </picture>
        <div className='tft_rigth t_f_txt'>
          <h3>{homeThirdData[0].title}</h3>
          <p>{homeThirdData[0].description}</p>
        </div>
      </section>
      <section className='t_sections t_s_section' ref={s_section.domRef}>
        <div className='t_s_txt tft_left'>
          <h3>{homeThirdData[1].title}</h3>
          <p>{homeThirdData[1].description}</p>
        </div>
        <picture className=' tft_rigth t_s_picture'>
          <img src={homeThirdData[1].img} alt='uxfinity 4road4you' />
        </picture>
      </section>
      <section className='t_sections t_t_section' ref={t_section.domRef}>
        <picture className='t_t_picture tft_left'>
          <img src={homeThirdData[2].img[0]} alt='uxfinity power fit' />
          <img src={homeThirdData[2].img[1]} alt='uxfinity power fit' />
          <img src={homeThirdData[2].img[2]} alt='uxfinity power fit' />
        </picture>
        <div className=' t_t_txt tft_rigth'>
          <h3>{homeThirdData[2].title}</h3>
          <p>{homeThirdData[2].description}</p>
        </div>
      </section>
    </div>
  )
}

export default ThirdHome
