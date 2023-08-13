import React, { useEffect, useState } from 'react'
import './FifthHome.css'
import LazyLoad from '../../../helpers/LazyLoad'

function FifthHome() {
  const [toggleAny, setToggleAny] = useState(false)

  const fifRef = LazyLoad(false, { threshold: 0.6 })
  useEffect(() => {
    setToggleAny(fifRef.visible)
  }, [fifRef.visible])

  return (
    <div className={`fif_container ${toggleAny?'fif_container_change':''}`} ref={fifRef.domRef}>
      <section className='fif_items'>
        <p>Does your company or startup needs a prototype</p>
        <h2 className={toggleAny ? 'fif_h2_sub' : ''}>
          {toggleAny  ? 'Contact us': 'Let´s talk'}
        </h2>
      </section>
    </div>
  )
}

export default FifthHome
