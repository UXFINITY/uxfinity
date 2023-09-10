import React, { useEffect, useState } from 'react'
import './SeventhHome.css'
import LazyLoad from '../../../helpers/LazyLoad'
import { useBodyContext } from '../../../helpers/BodyContext'

function SeventhHome() {
  const { AllData } = useBodyContext()
  const { homeSeventhData } = AllData

  const [toggleAny, setToggleAny] = useState(false)

  const fifRef = LazyLoad(false, { threshold: 0.6 })
  useEffect(() => {
    setToggleAny(fifRef.visible)
  }, [fifRef.visible])

  return (
    <div
      className={`fif_container ${toggleAny ? 'fif_container_change' : ''}`}
      ref={fifRef.domRef}
    >
      <section className='fif_items'>
        <p>{homeSeventhData.sub_title}</p>
        <h2 className={toggleAny ? 'fif_h2_sub' : ''}>
          {toggleAny ? homeSeventhData.title[0] : homeSeventhData.title[1]}
        </h2>
      </section>
    </div>
  )
}

export default SeventhHome
