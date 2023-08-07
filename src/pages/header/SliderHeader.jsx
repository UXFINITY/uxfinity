import React from 'react'
//files
import video from '../../assets/header/header-bg.mp4'
//styles
import './SliderHeader.css'
//components
import Nav from '../../layout/nav/Nav'
import Slider from '../../layout/slider-header/Slider'
function SliderHeader() {
  return (
    <div className='header-video-container'>
{/* <video className='header-video-bg' src={video} loop autoPlay></video> */}
      
        
        <Nav />
        <Slider />
      
    </div>
    )
}

export default SliderHeader
