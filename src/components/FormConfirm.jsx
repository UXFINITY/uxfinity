import React from 'react'
import error from '../assets/icons/error.svg'
import check from '../assets/icons/check.svg'
import load from '../assets/icons/loading.svg'
import './FormConfirm.css'

function FormConfirm({
  view = true,
  loading = true,
  validation = true
}) {
  return (
    <div
      className={`fconfirm_container ${
        view
          ? loading ? 'fconfirm_bgnormal':validation
            ? 'fconfirm_bggreen'
            : 'fconfirm_bgred'
          : 'fconfirm_invisible'
      }`}
    >
      {loading ? (
        <picture className='fconfirm_picture'>
          <img src={load} alt='confirmation send message' />
        </picture>
      ) : (
        <picture
          className={`fconfirm_colors ${validation ? 'fconfirm_green' : 'fconfigm_red'}`}
        >
          <img
            src={validation ? check : error}
            alt='confirmation send message'
          />
        </picture>
      )}
      <p
        className={`${
          loading ? '' : validation ? 'fconfirm_green' : 'fconfirm_red'
        }`}
      >
        {loading
          ? 'Sending Message'
          : validation
          ? 'The information has been sent successfully'
          : 'Please enter the correct information solicited'}
      </p>
    </div>
  )
}

export default FormConfirm
