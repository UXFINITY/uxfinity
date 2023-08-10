import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../../helpers/LanguageContext'
import './SecondHome.css'
function SecondHome() {
  const { AllData } = useLanguage()
  //destructuring
  const { homeSecondData } = AllData

  const homeRef = useRef(null)

  const callbackFunction = (entries) => {
    console.log({ entries })
    // entries.forEach((entry) => setIsVisible(entry.isIntersecting))
  }

  useEffect(() => {
    // const observer = new IntersectionObserver(callbackFunction)
    // observer.observe(homeRef.current)
    console.log('hola')
  }, [])

  return (
    <section className='home_s_section' ref={homeRef}>
      <div className='home_s_container'>
        <div className='home_s_pictures'>
          <picture>
            <img src={homeSecondData[0].img[0]} alt='' />
          </picture>
          <picture>
            <img src={homeSecondData[0].img[1]} alt='' />
          </picture>
          <picture>
            <img src={homeSecondData[0].img[2]} alt='' />
          </picture>
        </div>
        <div>
          <h3>{homeSecondData[0].title}</h3>
          <p>{homeSecondData[0].description}</p>
        </div>
      </div>
      <div className='home_s_container'>
        <div>
          <h3>{homeSecondData[1].title}</h3>
          <p>{homeSecondData[1].description}</p>
        </div>
        <div className='home_s_pictures'>
          <picture>
            <img src={homeSecondData[1].img} alt={homeSecondData[1].title} />
          </picture>
        </div>
      </div>
      <div className='home_s_container'>
        <div className='home_s_pictures'>
          <picture>
            <img src={homeSecondData[2].img[0]} alt='' />
          </picture>
          <picture>
            <img src={homeSecondData[2].img[1]} alt='' />
          </picture>
          <picture>
            <img src={homeSecondData[2].img[2]} alt='' />
          </picture>
        </div>
        <div>
          <h3>{homeSecondData[2].title}</h3>
          <p>{homeSecondData[2].description}</p>
        </div>
      </div>
    </section>
  )
}

export default SecondHome
