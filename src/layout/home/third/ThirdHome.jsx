import React from 'react'
import  './ThirdHome.css'
import {useBodyContext} from '../../../helpers/BodyContext'
function ThirdHome() {

    const {AllData}=useBodyContext()
    const {homeSecondData} = AllData

  return (
    <div className='t_container'>
        <section className='t_sections t_f_section'>
            <picture className='t_f_picture'><img src={homeSecondData[0].img[0]} alt="" /><img src={homeSecondData[0].img[1]} alt="" /><img src={homeSecondData[0].img[2]} alt="" /></picture>
            <div>
                <h3>Morfi</h3>
                <p>Morfi is a Web App project designed to make easier the table reserve process, connecting client with restaurants, and helping the restaurants to have control of their reserves, created to be a easy to use platform with just a couple steps.</p>
            </div>
        </section>
        <section className='t_sections t_s_section'>
            <div>
                <h3>4 road 4 you</h3>
                <p>A E-comer that offer to their clients reparation and Auto-parts with the best quality on the market.</p>
            </div>
            <picture className='t_s_picture'><img src={homeSecondData[1].img} alt="" /></picture>
        </section>
        <section className='t_sections t_t_section'>
            <picture className='t_t_picture'><img src={homeSecondData[2].img[0]} alt="" /><img src={homeSecondData[2].img[1]} alt="" /><img src={homeSecondData[2].img[2]} alt="" /></picture>
            <div>
                <h3>Power fit</h3>
                <p>A platform to have a control over your gym, create events, create and cancel memberships, make a schedule and more, create training plans to your users and more.</p>
            </div>
        </section>
    </div>
  )
}

export default ThirdHome