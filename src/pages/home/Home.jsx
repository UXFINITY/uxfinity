import React, { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home_f_c'>
      <h2 className='home_f_title'>
        Need a prototype for your start up or bussines?
      </h2>
      <ul className='home_f_list'>
        <li>Product design (UX,UI) 🧑🏻‍🎨</li>
        <li>Development 🧑‍💻</li>
        <li>Consulting 📈</li>
      </ul>
      <section className='home_f_section'>
        <h3>
          Create and engineer a <span>digital product</span> from scratch
        </h3>
        <p>
          We adopt your vision and craft an exquisite and functional user
          interface, drawing upon the finest UX methodologies. Our use of agile
          and contemporary programming techniques, along with rapid deployment
          capabilities, ensures immediate user feedback and enables seamless
          adjustments as required
        </p>
      </section>
    </div>
  )
}

export default Home
