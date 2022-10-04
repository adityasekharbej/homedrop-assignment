import React from 'react'
import "./custom.css";

export const CustomBtn = ({label}) => {
  return (
    <div className='btn-wrapper'>
        <p>{label}</p>
        <i class="fa-solid fa-angle-down"></i>
    </div>
  )
}
