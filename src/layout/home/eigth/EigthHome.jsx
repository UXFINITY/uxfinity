import React from 'react'
import "./EigthHome.css"
import Teamcat from "../../../assets/others/Team.png"

const team=[
    {
        id:41,
        name:'Andres Bejarano',
        rol:'CEO - Designer',
        img:Teamcat
    },{
        id:41,
        name:'Alejandra Lomónaco',
        rol:'UX/U  Designer',
        img:Teamcat,
    },{
        id:41,
        name:'Nicolas Fernandez',
        rol:'CEO - Designer / Marketing',
        img:Teamcat
    },{
        id:41,
        name:'Angela Pulido',
        rol:'Marketing',
        img:Teamcat
    },{
        id:41,
        name:'Gian Marquez',
        rol:'Developer',
        img:Teamcat
    },{
        id:41,
        name:'Gabriella Vesovic',
        rol:'Marketing',
        img:Teamcat
    }
]

function EigthHome() {
  return (
    <div className='ei_container'>
        <div className='ei_f_container'>
            <section className='ei_f_section ei_sections'>
                <h3>
                    Our team for you
                </h3>
                <h2>Know us closer</h2>
                <p>With a team of our professsionals we will make your project grow</p>
            </section>
            <section className='ei_s_section ei_sections'>
                {team.map((item)=>(
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