import React, { useEffect, useRef, useState } from 'react'
import './FirstHome.css'
import LazyLoad from '../../../helpers/LazyLoad'
import NumberConter from '../../../components/NumberConter'
import HelpersFunction from '../../../helpers/HelpersFunction'
function FirstHome() {
  const firstSection = LazyLoad(true, { threshold: 0.5 })
  const AllCounter = LazyLoad(true, { threshold: 0.8 })

  if (firstSection.visible) {
    const { current } = firstSection.domRef
    HelpersFunction.LazyDisplay(current, '.f_s_p_p1','block')
    HelpersFunction.LazyDisplay(current, '.f_s_p_p2','block', true, 500)
  }

  return (
    //
    <div className='f_container' ref={firstSection.domRef}>
      <section className='f_f_section'></section>
      <section className='f_s_section'>
        <h2>OUR METHODOLOGY</h2>
        <div className='f_s_p_container'>
          <p className='f_s_p_p1'>
            We believe in putting users at the center of the equation to create
            a seamless user experience that not only enhances usability but also
            drives higher conversion rates.<br/> Our dedicated team of{' '}
            <span>UX and UI designers</span>, experts in their field, employ an
            agile and iterative approach to tackle complex digital projects.
          </p>
          <p className='f_s_p_p2'>
            {' '}
            <span>When needed,</span> we assemble interdisciplinary squads
            comprising specialists in <span>branding, </span>
            <span>concept </span> <span>development, </span> <span>design, </span> <span>programming, </span>
            <span>and</span> <span> online</span> <span> marketing.</span> Together, we collaboratively
            craft digital solutions that not only captivate with improved user
            experience but also showcase cutting-edge technology.
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
