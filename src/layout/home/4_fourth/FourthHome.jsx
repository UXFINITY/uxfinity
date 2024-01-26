import React from 'react';
import Gabi from '../../../assets/others/Gabriella.png';
import './FourthHome.css';
import LazyLoad from '../../../helpers/LazyLoad';
import HelpersFunction from '../../../helpers/HelpersFunction';
import { useBodyContext } from '../../../helpers/BodyContext';

function FourthHome() {
  const { AllData } = useBodyContext();

  const { homeFourthData } = AllData;

  const gabyRef = LazyLoad(true, { threshold: 0 });

  if (gabyRef.visible) {
    const { current } = gabyRef.domRef;
    HelpersFunction.LazyDisplay(current, '.six_bg', 'block');
    HelpersFunction.LazyDisplay(current, '.six_f_section', 'flex');
    HelpersFunction.LazyDisplay(current, '.six_s_section', 'flex');
  }

  return (
    <div className='six_container' id='about' ref={gabyRef.domRef}>
      <section className='six_sections six_f_section'>
        <div className='six_rg_t_container'>
          <h3>{homeFourthData.title[0]}</h3>
          <div className='six_rg_t_img'>
            <h3>{homeFourthData.title[1]}</h3>
            <div>
              <img src={homeFourthData.img[0]} alt='' />
              <img src={homeFourthData.img[1]} alt='' />
              <img src={homeFourthData.img[2]} alt='' />
              <img src={homeFourthData.img[3]} alt='' />
              <img src={homeFourthData.img[4]} alt='' />
              <img src={homeFourthData.img[5]} alt='' />
            </div>
            <span className='six_rg_t_span0'>
              {homeFourthData.title_word[0]}
            </span>
            <span className='six_rg_t_span1'>
              {homeFourthData.title_word[1]}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthHome;
