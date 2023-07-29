import React, { useEffect, useState } from 'react'
import './Slider.css'

import { headerSlider } from '../../data/header-slider'

function Slider() {
  const [dataProject, setDataProject] = useState(headerSlider[0])
  const [contador, setcontador] = useState(0)
  const changeAll = () => {}

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentIndex = headerSlider.indexOf(dataProject)
      
  //     const nextIndex = currentIndex + 1
      
  //     setDataProject(headerSlider[nextIndex])
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className='slider-h_container'>
      <section>
        <div className='slider-h-titles'>

        <h1 className='slider-h-title'>{dataProject.name}</h1>
        <h2 className='slider-h-subtitle'>{dataProject.s_description}</h2>
        </div>
      </section>
      <section className='slider-h-section-image'>
        <div className='slider-h-images'>
          <picture className='slider-h-picture'><img src={dataProject.img_d} alt={dataProject.name} /></picture>
          <picture className='slider-h-picture'><img src={dataProject.img_m} alt={dataProject.name} /></picture>
        </div>
        <div className='slider-h-description'>
          <div className='slider-h-tags'><p>{dataProject.tag_1}</p>
          <span>{dataProject.tag_2}</span>
          </div>
          <p className='slider-h-big-description'>{dataProject.b_description}</p>
        </div>
      </section>
      {/* <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul> */}
    </div>
  )
}

export default Slider
