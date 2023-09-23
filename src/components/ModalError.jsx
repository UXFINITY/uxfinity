import React from 'react'
import './ModalError.css'
function ModalError({ state }) {
  const closeModal = (e) => {
    state(false)
    e.target.closest('.mde_container').style.display = 'none'
  }

  return (
    <div className='mde_container'>
      <div className='mde_content'>
        <h3>We are sorry</h3>
        <section>
          <p>It seems that we had a problem receiving your e-mail.</p>
          <p>Please contact us directly trough e-mail in this direction:</p>
          <span>projects@uxfinity.com</span>
        </section>
        <button onClick={closeModal}>Accept</button>
      </div>
    </div>
  )
}

export default ModalError
