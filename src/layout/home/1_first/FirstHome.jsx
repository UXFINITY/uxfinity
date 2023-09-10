import React, { useEffect, useRef, useState } from 'react'
import './FirstHome.css'
import { useBodyContext } from '../../../helpers/BodyContext'
import LazyLoad from '../../../helpers/LazyLoad'
import NumberConter from '../../../components/NumberConter'
import HelpersFunction from '../../../helpers/HelpersFunction'
function FirstHome() {
  //language
  const { AllData } = useBodyContext()
  const { homeFirstData } = AllData

  //animacion scroll
  const firstSection = LazyLoad(true, { threshold: 0.5 })
  const AllCounter = LazyLoad(true, { threshold: 0.8 })

  if (firstSection.visible) {
    const { current } = firstSection.domRef
    HelpersFunction.LazyDisplay(current, '.f_s_p_p1', 'block')
    HelpersFunction.LazyDisplay(current, '.f_s_p_p2', 'block', true, 500)
  }

  return (
    //
    <div className='f_container' ref={firstSection.domRef}>
      <section className='f_f_section'></section>
      <section className='f_s_section'>
        <h2>{homeFirstData.title}</h2>
        <div className='f_s_p_container'>
          <p className='f_s_p_p1'>
            {homeFirstData.f_description[0]}
            <br /> {homeFirstData.f_description[1]}{' '}
            <span>{homeFirstData.f_description[2]}</span>
            {homeFirstData.f_description[3]}
          </p>
          <p className='f_s_p_p2'>
            {' '}
            <span>{homeFirstData.s_description[0]}</span>
            {homeFirstData.s_description[1]}
            <span>{homeFirstData.s_description[2]}</span>
            <span>{homeFirstData.s_description[3]}</span>{' '}
            <span>{homeFirstData.s_description[4]}</span>{' '}
            <span>{homeFirstData.s_description[5]}</span>{' '}
            <span>{homeFirstData.s_description[6]}</span>
            <span>{homeFirstData.s_description[7]}</span>{' '}
            <span> {homeFirstData.s_description[8]}</span>{' '}
            <span> {homeFirstData.s_description[9]}</span>
            {homeFirstData.s_description[10]}
          </p>
        </div>
      </section>
      <section className='f_t_section' ref={AllCounter.domRef}>
        <div>
          <span>
            {AllCounter.visible ? (
              <NumberConter max={12} time={1000} count={12} />
            ) : (
              0
            )}
          </span>
          <p>Specialist</p>
        </div>
        <div>
          <span className='f_t_span'>
            {AllCounter.visible ? (
              <NumberConter max={50} time={1000} count={50} />
            ) : (
              0
            )}
            +
          </span>
          <p>Projects</p>
        </div>
        <div>
          <span>
            {AllCounter.visible ? (
              <NumberConter max={15} time={1000} count={15} decimal={10} />
            ) : (
              0
            )}
          </span>
          <p>Years</p>
        </div>
      </section>
    </div>
  )
}

export default FirstHome
