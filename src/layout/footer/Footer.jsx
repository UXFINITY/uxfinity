import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { useBodyContext } from '../../helpers/BodyContext'

function Footer() {
  const { AllData } = useBodyContext()
  const { footer } = AllData

  return (
    <footer className='foot_container'>
      <section className='foot_f_section'>
        <div className='foot_ff_column'>
          <Link smooth={true} duration={100} to='methodology'>
            {footer.titles[0]}
          </Link>
          <span>  |  </span>
          <Link smooth={true} duration={100} to='methodology'>
            {footer.titles[1]}
          </Link>
          <span>  |   </span>
          <Link smooth={true} duration={100} to='methodology'>
            {footer.titles[2]}
          </Link>
        </div>
        <div className='other_container'>
          <p>{footer.other}</p>
        </div>
      </section>
      <section className='foot_s_section'>{footer.made}</section>
    </footer>
  )
}

export default Footer
