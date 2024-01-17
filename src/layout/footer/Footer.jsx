import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { useBodyContext } from '../../helpers/BodyContext'
import x from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import facebook from '../../assets/icons/facebook.svg'
function Footer() {
  const { AllData } = useBodyContext()
  const { footer } = AllData

  return (
    <footer className='foot_container'>
      <section className='foot_f_section'>
        <div className='foot_f_company'>{footer.company}</div>
        <div className='foot_ff_column'>
          <Link className='linkBtn'  to='methodology'>
            {footer.titles[0]}
          </Link>          
          <Link className='linkBtn'  to='methodology'>
            {footer.titles[1]}
          </Link>          
          <Link className='linkBtn' to='methodology'>
            {footer.titles[2]}
          </Link> 
          <Link className='linkBtn' smooth={true} duration={100} to='methodology'>
            {footer.titles[3]}
          </Link>
        </div>
      </section>
      <section className='foot_f_social'>
        <Link ><img className='foot_socialIcon' src={x} alt='Twitter/X' /></Link>
        <Link ><img className='foot_socialIcon' src={linkedin} alt='Twitter/X' /></Link>
        <Link ><img className='foot_socialIcon' src={facebook} alt='Twitter/X' /></Link>
      </section>
      <div className='foot_divider'></div>
      <section className='foot_s_section'>
        <div className='footer_terms'>
        <Link>{footer.other[0]}</Link>
          <Link>{footer.other[1]}</Link>
        </div>
        <div className='footer_terms'>{footer.made}</div>

      </section>
      
    </footer>
  )
}

export default Footer
