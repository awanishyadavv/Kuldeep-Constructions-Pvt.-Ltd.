import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services-container'>
      <div className='services'><h1>Expertise</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique laboriosam labore itaque? Quaerat quibusdam cupiditate veniam quia minima ipsum, mollitia beatae fugit non soluta nemo eveniet et iste explicabo.</p> </div>
      <div className='services-rows'>
        <div className='row-content'></div>
        <div className='row-image'></div>
      </div>
      <div className='services-rows'>
        <div className='row-image'></div>
        <div className='row-content'></div>
      </div>
      <div className='services-rows'>
        <div className='row-content'></div>
        <div className='row-image'></div>
      </div>
      <div className='services-rows'>
        <div className='row-image'></div>
        <div className='row-content'></div>
      </div>
    </div>
  )
}

export default Services