import React from 'react'
import './FirstHome.css'
function FirstHome() {
  return (
    <div className='f_container'>
        <section className='f_f_section'></section>
        <section className='f_s_section'>
            <h2>
                OUR METHODOLOGY
            </h2>
            <div className='f_s_p_container'>
            <p>We believe in putting users at the center of the equation to create a seamless user experience that not only enhances usability but also drives higher conversion rates. Our dedicated team of <span>UX and UI designers</span>, experts in their field, employ an agile and iterative approach to tackle complex digital projects.</p>
            <p> <span>When needed,</span> we assemble interdisciplinary squads comprising specialists in <span>branding,</span><span> concept development,</span><span> design, programming,</span><span> and online marketing.</span> Together, we collaboratively craft digital solutions that not only captivate with improved user experience but also showcase cutting-edge technology.</p>
            </div>
        </section>
        <section className='f_t_section'>
            <div>
                <span>12</span>
                <p>Specialist</p>
            </div>
            <div>
                <span>50+</span>
                <p>Projects</p>
            </div>
            <div>
                <span>1,5</span>
                <p>Years</p>
            </div>
        </section>
    </div>
  )
}

export default FirstHome