import React, { useEffect, useState } from 'react';
import './SeventhHome.css';
import LazyLoad from '../../../helpers/LazyLoad';
import { useBodyContext } from '../../../helpers/BodyContext';
import { InlineWidget } from 'react-calendly';

function SeventhHome() {
  const { AllData } = useBodyContext();
  const { homeSeventhData } = AllData;

  const [toggleAny, setToggleAny] = useState(false);

  const fifRef = LazyLoad(false, { threshold: 0.6 });
  useEffect(() => {
    setToggleAny(fifRef.visible);
  }, [fifRef.visible]);

  return (
    <div
      className={`fif_container ${toggleAny ? 'fif_container_change' : ''}`}
      id='contact'
      ref={fifRef.domRef}
    >
      <section className='fif_items'>
        <div className='fif_text'>
          <h2 className={toggleAny ? 'fif_h2_sub' : ''}>
            {toggleAny ? homeSeventhData.title : homeSeventhData.title}
          </h2>
          <p className='desktop'>{homeSeventhData.sub_title[0]}</p>
          <p className='mobile'>{homeSeventhData.sub_title[1]}</p>
        </div>
        <div className='fif_calendly'>
          <InlineWidget
            url='https://calendly.com/info-oqk/meeting-with-our-team'
            styles={{ height: '100%', width: '100%'}}
          />
        </div>
      </section>
    </div>
  );
}

export default SeventhHome;
