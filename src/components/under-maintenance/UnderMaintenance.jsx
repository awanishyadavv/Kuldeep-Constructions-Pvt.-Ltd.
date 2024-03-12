import React from 'react'
import './UnderMaintenance.css'
import Image from '../../asstes/under-mentainance.png'

const UnderMaintenance = () => {
  return (
    <div className='under-maintenance'>
        <img src={Image} alt="" className='under-maintenance-image'/>
    </div>
  )
}

export default UnderMaintenance