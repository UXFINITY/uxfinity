import React, { useEffect, useState } from 'react';
import './FifthHome.css';
import LazyLoad from '../../../helpers/LazyLoad';
import HelpersFunction from '../../../helpers/HelpersFunction';
import { useBodyContext } from '../../../helpers/BodyContext';
function FifthHome() {
  const { AllData } = useBodyContext();
  const { homeFifthData } = AllData;

  const ftRef = LazyLoad(false, { threshold: 0.1 });

  if (ftRef.visible) {
    HelpersFunction.LazyDisplay(
      ftRef.domRef.current,
      '.ft_noneToBlock',
      'block'
    );
    HelpersFunction.LazyDisplay(ftRef.domRef.current, '.ft_noneToFlex', 'flex');
  } else {
    HelpersFunction.LazyDisplay(
      ftRef.domRef.current,
      '.ft_noneToBlock',
      'none'
    );

    HelpersFunction.LazyDisplay(ftRef.domRef.current, '.ft_noneToFlex', 'none');
  }

  return (
    <div className='ft_container' id='whatwedo' ref={ftRef.domRef}>
      <section className='ft_items_container'>
        <div className='ft_items ft_text'>
          <h3>{homeFifthData.f_title[0]}</h3>
          <h3>{homeFifthData.f_title[1]}</h3>
          <h3><span className='ft_title_color'>{homeFifthData.f_title[2]}</span></h3>
          <p className='ft_noneToBlock'>{homeFifthData.description[0]}</p>
          <p className='ft_noneToBlock'>{homeFifthData.description[1]}</p>
          <p className='ft_noneToBlock'>{homeFifthData.description[2]}</p>
        </div>
        <div className='ft_items ft_buttons ft_noneToFlex'>
          <button>{homeFifthData.buttons[0]}</button>
          <button>{homeFifthData.buttons[1]}</button>
          <button>{homeFifthData.buttons[2]}</button>
        </div>
      </section>
    </div>
  );
}

export default FifthHome;
