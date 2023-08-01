import './SliderButtonHeader.css'

import React from 'react'

function SliderButtonHeader({ img, name, index, currentIndex, eventButton }) {
  return (
    <div
      onClick={() => eventButton(index)}
      className={`button_sl-h ${
        currentIndex === index ? 'select_option_sl_h' : ''
      }`}
    >
      <img src={img} alt={name} />
      <span>{name}</span>
    </div>
  )
}

export default SliderButtonHeader
