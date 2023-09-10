import React from 'react'
import './Footer.css'
import face from '../../assets/icons/facebook.svg'
import inst from '../../assets/icons/instagram.svg'
import twit from '../../assets/icons/twitter.svg'
import { useBodyContext } from '../../helpers/BodyContext'

function Footer() {
  const {AllData} = useBodyContext()
  const {footer} = AllData

  return (
    <footer className='foot_container'>
      <section className='foot_f_section'>
        <div className='foot_ff_colum'>
          <h3>{footer.titles[0]}</h3>
          <ul className='foot_f_list'>
            <a href='#' target='_blank'>
              <img src={face} alt='uxfinity facebook' />
            </a>
            <a href='#' target='_blank'>
              <img src={inst} alt='uxfinity instagram' />
            </a>
            <a href='#' target='_blank'>
              <img src={twit} alt='uxfinity twitter' />
            </a>
          </ul>
        </div>
        <div className='foot_fs_colum'>
          <h3>{footer.titles[1]}</h3>
          <ul>
            <a href='#'>{footer.company[0]}</a>
            <a href='#'>{footer.company[1]}</a>
            <a href='#'>{footer.company[2]}</a>
            <a href='#'>{footer.company[3]}</a>
          </ul>
        </div>
        <div className='foot_ft_colum'>
          <h3>{footer.titles[2]}</h3>
          <ul>
          <a href='#'>{footer.features[0]}</a>
            <a href='#'>{footer.features[1]}</a>
            <a href='#'>{footer.features[2]}</a>
            <a href='#'>{footer.features[3]}</a>
          </ul>
        </div>
      </section>
      <section className='foot_s_section'>
        {footer.made}
      </section>
    </footer>
  )
}

export default Footer
