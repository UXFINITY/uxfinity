import React, { useEffect, useState } from 'react';
import './Header.css';
import { useBodyContext } from '../../helpers/BodyContext';
import ArrowDown from '../../assets/header/Group.svg';
import Spline from '@splinetool/react-spline';

function Header() {
  // const { AllData } = useBodyContext();
  // const { headerData } = AllData;
  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => {
    setLoading(false);
  };

  return (
    <div className='header_container'>
      <div className='header_box'>
        {loading && <div className='spline_loading'></div>}
        <Spline
          scene='https://prod.spline.design/rcJCWqdjs37mdzhv/scene.splinecode'
          onLoad={handleOnLoad}
        />
      </div>
    </div>
  );
}

export default Header;
