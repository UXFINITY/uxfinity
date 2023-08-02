import React, { useEffect, useState, useRef } from 'react'
import './Slider.css'
import { EnData, EsData } from '../../data/Data'
import SliderButtonHeader from '../../components/SliderButtonHeader'
import { useLanguage } from '../../helpers/LanguageContext'

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const changeOpacity = useRef(null)
  const fontStyleTitle = useRef(null)
  //interval container
  let interval
  //context
  const { AllData } = useLanguage()
  const { headerSlider } = AllData

  const intervalFunction = () => {
    const { current: element } = changeOpacity
    interval = setInterval(() => {
      element.style.transition = 'opacity 1.2s ease'
      element.style.opacity = 0

      //time for change animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headerSlider.length)
        element.style.opacity = 1
      }, 1200)
    }, 6000)
  }

  useEffect(() => {
    if (!isPaused) {
      intervalFunction()
    }

    return () => clearInterval(interval)
  }, [isPaused, headerSlider.length])

  const handleSliderClick = (index) => {
    const { current: element } = changeOpacity
    //conditional for avoid click on the same slide
    if (currentIndex !== index) {
      switch (index) {
        case 0:
          fontStyleTitle.current.style.fontFamily = 'Pattaya'
          break
        case 1:
          fontStyleTitle.current.style.fontFamily = 'Bebas Neue'
          break
        case 2:
          fontStyleTitle.current.style.fontFamily = 'Outfit'
          break
        default:
          break
      }
      element.style.transition = 'opacity 0s ease'
      element.style.opacity = 0
      setIsPaused(true)
      setCurrentIndex(index)
      setTimeout(() => {
        element.style.transition = 'opacity 1.2s ease'
        element.style.opacity = 1
        //static time animation
        setTimeout(() => {
          setIsPaused(false)
        }, 2000)
      }, 100)
    }
  }

  return (
    <div className='slider-all-container'>
      <div ref={changeOpacity} className='slider-h_container'>
        <section>
          <div className='slider-h-titles'>
            <h1 className='slider-h-title' ref={fontStyleTitle}>
              {headerSlider[currentIndex].name}
            </h1>
            <h2 className='slider-h-subtitle'>
              {headerSlider[currentIndex].s_description}
            </h2>
          </div>
        </section>
        <section>
          <div className='slider-h-images'>
            <picture className='slider-h-picture'>
              <img
                src={headerSlider[currentIndex].img_d}
                alt={headerSlider[currentIndex].name}
              />
            </picture>
            <picture
              className={`slider-h-picture ${
                headerSlider[currentIndex].img_m ? '' : 'slider-h-picture-dnone'
              }`}
            >
              <img
                src={headerSlider[currentIndex].img_m}
                alt={headerSlider[currentIndex].name}
              />
            </picture>
          </div>
          <div className='slider-h-description'>
            <div className='slider-h-tags'>
              <p>{headerSlider[currentIndex].tag_1}</p>
              <span>{headerSlider[currentIndex].tag_2}</span>
            </div>
            <p className='slider-h-big-description'>
              {headerSlider[currentIndex].b_description}
            </p>
          </div>
        </section>
      </div>
      <div className='button-sl-h-container'>
        {headerSlider.map((item, index) => (
          <SliderButtonHeader
            key={item.id}
            img={item.img_d}
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

export default Slider
