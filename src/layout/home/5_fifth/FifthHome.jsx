import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/icons/arrow.svg';
import './FifthHome.css';
import LazyLoad from '../../../helpers/LazyLoad';
import HelpersFunction from '../../../helpers/HelpersFunction';
import { useBodyContext } from '../../../helpers/BodyContext';
import { Link } from 'react-scroll';
import Spline from '@splinetool/react-spline';
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

  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => {
    setLoading(false);
  };

  return (
    <div className='ft_container' id='whatwedo' ref={ftRef.domRef}>
      <section className='ft_items_container'>
        <div className='ft_items_container_horizontal'>
          <div className='ft_items ft_text'>
            <div className='ft_title desktop'>
              <h3>{homeFifthData.f_title[0]}</h3>
              <div className='ft_group_title'>
                <h3>{homeFifthData.f_title[1]}</h3>
                <h3>
                  <span className='ft_title_color'>
                    {homeFifthData.f_title[2]}
                  </span>
                </h3>
              </div>
            </div>
            <div className="ft_title mobile">
              <h3>{homeFifthData.f_title.join(' ')}</h3>
            </div>

            <div>
              <p className='ft_noneToBlock'>{homeFifthData.description[0]}</p>
              <p className='ft_noneToBlock'>{homeFifthData.description[1]}</p>
              <p className='ft_noneToBlock'>{homeFifthData.description[2]}</p>
            </div>
          </div>
          <div className='ft_cubic_container'>
            {loading && <div className='spline_loading'></div>}
            <Spline
              scene='https://prod.spline.design/tswBqpJpumcGQ8ay/scene.splinecode'
              style={{ width: '100%', height: '100%' }}
              onLoad={handleOnLoad}
            />
          </div>
        </div>

        <div className='ft_items ft_buttons ft_noneToFlex'>
          <Link className='ft_buttons_button' to='contact'>
            {homeFifthData.buttons[0]}
            <img src={arrow} alt='arrow' />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FifthHome;
