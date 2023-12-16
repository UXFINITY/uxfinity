import { useEffect, useState, useRef } from 'react';
import './App.css';
// files and helpers
import { useBodyContext } from './helpers/BodyContext';
import video from './assets/uxFinityIntro.mp4';
// components
import Nav from './layout/nav/Nav';
import Header from './layout/header/Header';
import FirstHome from './layout/home/1_first/FirstHome';
import SecondHome from './layout/home/2_second/SecondHome';
import ThirdHome from './layout/home/3_third/ThirdHome';
import FourthHome from './layout/home/4_fourth/FourthHome';
import FifthHome from './layout/home/5_fifth/FifthHome';
import SixthHome from './layout/home/6_sixth/SixthHome';
import SeventhHome from './layout/home/7_seventh/SeventhHome';
import EigthHome from './layout/home/8_eigth/EigthHome';
import NinethHome from './layout/home/9_nineth/NinethHome';
import Footer from './layout/footer/Footer';
import arrow from './assets/header/Group.svg';

function App() {
  const vite_service = import.meta.env.VITE_SERVICE_ID;
  const vite_template = import.meta.env.VITE_TEMPLATE_ID;
  const vite_user = import.meta.env.VITE_USER_ID;

  // si render es true por defecto, se muestra el video
  const [render, setRender] = useState(false);
  const { bgColor } = useBodyContext();
  const videoIntro = useRef(null);

  if (bgColor) {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
  } else {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
  }

  // efecto para darle play y ocultar el elemento
  useEffect(() => {
    if (render) {
      try {
        videoIntro.current.playbackRate = 3;
        videoIntro.current.play();
      } catch (e) {
        console.log(e);
        setRender(false);
      }
    }
  }, []);

  const handleRender = () => {
    setRender(false);
  };

  return (
    <>
      {render ? (
        <video
          className="videoIntro"
          src={video}
          ref={videoIntro}
          muted
          onEnded={handleRender}
        ></video>
      ) : (
        <div className="App">
          <Nav />
          <Header />
          <FirstHome />
          <SecondHome />
          <ThirdHome />
          <FourthHome />
          {/* quinto home falla en mobile */}
          <FifthHome />
          <SixthHome />
          <SeventhHome />
          <EigthHome />
          <NinethHome
            service={vite_service}
            template={vite_template}
            user={vite_user}
          />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
