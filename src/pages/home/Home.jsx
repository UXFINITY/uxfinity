import React from 'react'
import './Home.css'
import { useLanguage } from '../../helpers/LanguageContext'

function Home() {
  //context
  const { AllData } = useLanguage()
  //destructuring
  const { homeFirstData } = AllData
  const {
    title: firstTitle,
    buttons: firstButtons,
    flexBoxOne,
    flexBoxTwo
  } = homeFirstData
  return (
    <div className='home_f_c'>
      <h2 className='home_f_title'>{firstTitle}</h2>
      <ul className='home_f_list'>
        <li>{firstButtons[0]}</li>
        <li>{firstButtons[1]}</li>
        <li>{firstButtons[2]}</li>
      </ul>
      <section className='home_f_section'>
        <h3>
          {flexBoxOne[0]}
          <span>{flexBoxOne[1]}</span> {flexBoxOne[2]}
        </h3>
        <p>{flexBoxTwo}</p>
      </section>
    </div>
  )
}

export default Home
