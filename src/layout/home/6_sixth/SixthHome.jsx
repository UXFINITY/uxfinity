import React from 'react'
import './SixthHome.css'
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'
import { useBodyContext } from '../../../helpers/BodyContext'

function SixthHome() {
  const { AllData } = useBodyContext()
  const { homeSixthData:comentarios } = AllData

  const sevenRef = LazyLoad(true, { threshold: 0 })

  if (sevenRef.visible) {
    const { current } = sevenRef.domRef
    HelpersFunction.LazyDisplay(current, '.sv_s_container', 'flex')
    HelpersFunction.LazyDisplay(current, '.sv_s_container_invert', 'flex')
  }

  //este map podria ser un componente
  return (
    <div className='sv_container' ref={sevenRef.domRef}>
      {comentarios.map((com, ind) => (
        <section
          className={`sv_s_container ${
            ind % 2 != 0 ? 'sv_s_container_invert' : ''
          }`}
          key={com.id}
        >
          <picture>
            <img src={com.img} alt={com.name} />
          </picture>
          <div className='sv_s_text'>
            <p>{com.comment} </p>
            <div className='sv_s_name'>
              <h3>{com.name}</h3>
              <span>{com.company}</span>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default SixthHome
