import React from 'react'
import './Home.css'
import FirstHome from '../../layout/firstHomeSection/FirstHome'
import SecondHome from '../../layout/secondHomeSection/SecondHome'

function Home() {
  
  return (
    <>
      <div className='home_f_c'>
        <FirstHome />
        <SecondHome/>
      </div>
    </>
  )
}

export default Home
