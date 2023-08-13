import React from 'react'
import Gabi from "../../../assets/others/Gabriella.png"
import "./SixthHome.css"
function SixthHome() {
  return (
    <div className='six_container'>
        <div className='six_bg'></div>
        <section className='six_sections six_f_section'>
            <div className='six_rg_t_container'>
                <h3>Any question?</h3>
                <p>Gabriella, our adviser its available to solve any question you have.</p>
            </div>
            <div div className='six_rg_b_container'>
                <h3>Request form</h3>
                <div>
                    <span>+43 6602069525</span><span>or</span><span>Gabriella@gmail.com</span>
                </div>
            </div>
        </section>
        <section className='six_sections six_s_section'>
            <picture><img src={Gabi} alt="Gabriela" /></picture>
            <span>Gabriella Vesovic</span>
        </section>
    </div>
  )
}

export default SixthHome