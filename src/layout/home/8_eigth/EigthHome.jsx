import React from 'react'
import './EigthHome.css'
import { useBodyContext } from '../../../helpers/BodyContext'

function EigthHome() {
  const { AllData } = useBodyContext()
  const { homeEighthData } = AllData

  return (
    <div className='ei_container'>
      <div className='ei_f_container'>
        <section className='ei_f_section ei_sections'>
          <h3>{homeEighthData.title}</h3>
          <h2>{homeEighthData.sub_title}</h2>
          <p>{homeEighthData.description}</p>
        </section>
        <section className='ei_s_section ei_sections'>
          {homeEighthData.team.map((item) => (
            <div className='ei_team_container' key={item.id}>
              <picture>
                <img src={item.img} alt={item.name} />
              </picture>
              <h4>{item.name}</h4>
              <p>{item.rol}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default EigthHome
