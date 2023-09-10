import React, { useEffect, useState, useRef } from 'react'
import './SecondHome.css'
import SliderButtonHeader from '../../../components/SliderButtonHeader'
import { useBodyContext } from '../../../helpers/BodyContext'
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'

function SecondHome() {
  const [currentIndex, setCurrentIndex] = useState(0) //for change slide
  const [isPaused, setIsPaused] = useState(false) //for pause interval
  const headerContainer = useRef(null)
  const currentFont = ['Pattaya', 'Bebas Neue', 'Outfit']

  // const secondSection = LazyLoad()
  //interval container
  let interval
  //context
  const { AllData } = useBodyContext()
  const { homeSecondData, sliderBg } = AllData

  const sliderItemsContent = LazyLoad(true, { threshold: 0.6 })

  if (sliderItemsContent.visible) {
    
    HelpersFunction.LazyDisplay(
      headerContainer.current,
      '.slider_bg_sections',
      'flex'
    )
  }

  //TODO: interval function
  const intervalFunction = () => {
    const container = headerContainer.current
    const sliderTitle = container.querySelector('.slider-h-title')
    const sliderImages = container.querySelector('.slider-h-images')
    const sliderDescription = container.querySelector('.slider-h-description')
    const sliderSubtitle = container.querySelector('.slider-h-subtitle')

    interval = setInterval(() => {
      sliderTitle.style.animation = 'h_changeScale_out 0.45s linear'
      sliderImages.style.animation = 'h_leftToRight_out 0.45s linear'
      sliderDescription.style.animation = 'h_btmToTop_out 0.45s linear'
      sliderSubtitle.style.animation = 'h_leftToRight_out 0.45s linear'
      //time for change animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeSecondData.length)

        sliderTitle.style.animation = 'h_changeScale 0.6s linear'
        sliderImages.style.animation = 'h_leftToRight 0.45s linear'
        sliderDescription.style.animation = 'h_btmToTop 0.45s linear'
        sliderSubtitle.style.animation = 'h_leftToRight 0.45s linear'
      }, 350)
    }, 8000)
  }

  //TODO: useEffect for interval

  useEffect(() => {
    if (!isPaused) {
      intervalFunction()
    }

    return () => clearInterval(interval)
  }, [isPaused, homeSecondData.length])

  //TODO: handle click function
  const handleSliderClick = (index) => {
    const { current } = headerContainer
    const element = current.querySelectorAll('.slider_bg_sections')
    //conditional for avoid click on the same slide
    if (currentIndex !== index) {
      [...element].forEach(e=>{e.style.transition = 'opacity 0s ease'
      e.style.opacity = 0
      })
      
      setIsPaused(true)
      setCurrentIndex(index)
      setTimeout(() => {
        [...element].forEach(e=>{e.style.transition = 'opacity 1.2s ease'
        e.style.opacity = 1})
        
        //static time animation
        setTimeout(() => {
          setIsPaused(false)
        }, 500)
      }, 100)
    }
  }

  return (
    <div className='slider-all-container' ref={headerContainer}>
      <h2 className='slider-all-title'>
        Tangible Achievements Through UX/UI Design
      </h2>
      <div className='slider-h_container' ref={sliderItemsContent.domRef}>
        <div className='slider_bg_container'>
          <img src={sliderBg[currentIndex]} alt='uxfinity' />
        </div>
        <section className='slider_bg_sections'>
          <div className='slider-h-titles'>
            <h1
              className={`slider-h-title`}
              style={{ fontFamily: currentFont[currentIndex] }}
            >
              {homeSecondData[currentIndex].name}
            </h1>
            <h2 className='slider-h-subtitle'>
              {homeSecondData[currentIndex].s_description}
            </h2>
          </div>
        </section>
        <section className='slider_bg_sections'>
          <div className='slider-h-images'>
            <picture className='slider-h-picture'>
              <img
                src={homeSecondData[currentIndex].img_d}
                alt={homeSecondData[currentIndex].name}
              />
            </picture>
            <picture
              className={`slider-h-picture ${
                homeSecondData[currentIndex].img_m ? '' : 'slider-h-picture-dnone'
              }`}
            >
              <img
                src={homeSecondData[currentIndex].img_m}
                alt={homeSecondData[currentIndex].name}
              />
            </picture>
          </div>
          <div className='slider-h-description'>
            <div className='slider-h-tags'>
              <p>{homeSecondData[currentIndex].tag_1}</p>
              <span>{homeSecondData[currentIndex].tag_2}</span>
            </div>
            <p className='slider-h-big-description'>
              {homeSecondData[currentIndex].b_description}
            </p>
          </div>
        </section>
      </div>
      <div className='button-sl-h-container'>
        {homeSecondData.map((item, index) => (
          <SliderButtonHeader
            key={item.id}
            name={item.name}
            index={index}
            currentIndex={currentIndex}
            eventButton={handleSliderClick}
          />
        ))}
      </div>
    </div>
  )
}

export default SecondHome
