import React from 'react'
import './SeventhHome.css'
import person from "../../../assets/others/Person.png"
function SeventhHome() {
  return (
    <div className='sv_container'>
        <section className='sv_s_container'>
            <picture><img src={person} alt="" /></picture>
            <div className='sv_s_text'>
                <p>“Fast, effective, comunicative, work with UXFinity is a great xperiences, they understood and found our problem, then in just couiple of weeks they create a amazing and improved design, I recommend really them” </p>
                <div className='sv_s_name'>
                    <h3>Philip Jhonas</h3>
                    <span>Refisal Ltmd</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SeventhHome