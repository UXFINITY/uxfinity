import React, { useState } from 'react';
import './SixthHome.css';
import LazyLoad from '../../../helpers/LazyLoad';
import HelpersFunction from '../../../helpers/HelpersFunction';
import { useBodyContext } from '../../../helpers/BodyContext';
import arrow from '../../../assets/icons/simpleArrow.svg';

function SixthHome() {
  const { AllData } = useBodyContext();
  const { homeSixthData: questions } = AllData;

  const sevenRef = LazyLoad(true, { threshold: 0 });

  if (sevenRef.visible) {
    const { current } = sevenRef.domRef;
    HelpersFunction.LazyDisplay(current, '.sv_s_container', 'flex');
    HelpersFunction.LazyDisplay(current, '.sv_s_container_invert', 'flex');
  }

  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (ind) => {
    setActiveIndex(ind === activeIndex ? null : ind);
  };

  return (
    <div className='sv_container' id='testimonial' ref={sevenRef.domRef}>
      <section className={'sv_s_container'}>
        <h3>{questions.title}</h3>
        {questions.questions.map((q, ind) => (
          <div
            key={q.id}
            className={`sv_s_faq ${activeIndex === ind ? 'active' : ''}`}
          >
            <button
              onClick={() => handleTitleClick(ind)}
              className='sv_s_question'
            >
              <p>{q.question}</p>
              <img
                src={arrow}
                alt='arrow fow FAQ'
                className={`arrow_faq ${activeIndex === ind ? 'up' : 'down'}`}
              />
            </button>
            <p className={`sv_s_answer ${activeIndex === ind ? 'active' : ''}`}>
              {q.answer}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default SixthHome;
