import React, { useEffect, useRef } from 'react'
import './Home.css'
import { useLanguage } from '../../helpers/LanguageContext'

function Home() {
  //context
  const { AllData } = useLanguage()
  //destructuring
  const { homeFirstData, homeSecondData } = AllData
  const {
    title: firstTitle,
    buttons: firstButtons,
    flexBoxOne,
    flexBoxTwo
  } = homeFirstData

  // --------------------------------------------------

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

  // --------------------------------------------------
  return (
    <div className='home_f_c'>
      <h2 className='home_f_title'>{firstTitle}</h2>
      <ul className='home_f_list'>
        <li>{firstButtons[0]}</li>
        <li>{firstButtons[1]}</li>
        <li>{firstButtons[2]}</li>
      </ul>
      <section className='home_f_section'>
        <h3>
          {flexBoxOne[0]}
          <span>{flexBoxOne[1]}</span> {flexBoxOne[2]}
        </h3>
        <p>{flexBoxTwo}</p>
      </section>
      {/*  */}
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
    </div>
  )
}

export default Home
