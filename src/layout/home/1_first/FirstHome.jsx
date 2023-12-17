import React, { useEffect, useRef, useState } from 'react';
import './FirstHome.css';
import { useBodyContext } from '../../../helpers/BodyContext';
import LazyLoad from '../../../helpers/LazyLoad';
import NumberConter from '../../../components/NumberConter';
import HelpersFunction from '../../../helpers/HelpersFunction';
function FirstHome() {
  //language
  const { AllData } = useBodyContext();
  const { homeFirstData } = AllData;

  //animacion scroll
  const firstSection = LazyLoad(true, { threshold: 0.5 });
  const AllCounter = LazyLoad(true, { threshold: 0.8 });

  if (firstSection.visible) {
    const { current } = firstSection.domRef;
    HelpersFunction.LazyDisplay(current, '.f_s_p_p1', 'block');
    HelpersFunction.LazyDisplay(current, '.f_s_p_p2', 'block', true, 500);
  }

  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='f_container' id='services' ref={firstSection.domRef}>
      <section className='f_f_section'></section>
      <section className='f_s_section'>
        <div className='f_s_title'>
          <h2>{homeFirstData.title}</h2>
          <p>{homeFirstData.subtitle}</p>
        </div>
        <div className='f_s_list'>
          {homeFirstData.list_title.map((title, index) => (
            <div
              key={title}
              className={`f_s_item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                onClick={() => handleTitleClick(index)}
                className='button-with-arrow'
              >
                <span className='button-text'>{title}</span>
                <span
                  className={`arrow ${activeIndex === index ? 'up' : 'down'}`}
                ></span>
              </button>
              <p
                className={`f_s_description ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                {homeFirstData.list_description[index]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FirstHome;
