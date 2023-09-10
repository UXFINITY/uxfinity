import React from 'react'
import './EigthHome.css'
import Beja from '../../../assets/team/Beja.png'
import Ale from '../../../assets/team/Ale.jpg'
import Fercho from '../../../assets/team/Fercho.png'
import Angela from '../../../assets/team/Angela.png'
import Gian from '../../../assets/team/Gian.png'
import Gabi from '../../../assets/team/Gabi.png'

const team = [
  {
    id: 41,
    name: 'Andres Bejarano',
    rol: 'CEO - Designer',
    img: Beja
  },
  {
    id: 42,
    name: 'Alejandra Lomónaco',
    rol: 'UX/U  Designer',
    img: Ale
  },
  {
    id: 45,
    name: 'Gian Marquez',
    rol: 'Developer',
    img: Gian
  },
  {
    id: 46,
    name: 'Gabriella Vesovic',
    rol: 'Marketing',
    img: Gabi
  }
]

function EigthHome() {
  return (
    <div className='ei_container'>
      <div className='ei_f_container'>
        <section className='ei_f_section ei_sections'>
          <h3>Our team for you</h3>
          <h2>Know us closer</h2>
          <p>
            With a team of our professsionals we will make your project grow
          </p>
        </section>
        <section className='ei_s_section ei_sections'>
          {team.map((item) => (
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
