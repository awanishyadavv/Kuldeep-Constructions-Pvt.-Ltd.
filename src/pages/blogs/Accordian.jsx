import React,{useState} from 'react'
import './Blog.css'

const Accordian = ({heading, description}) => {
    const [show, setShow] = useState(false);
  return (
    <>
    <div className='accordian-row'>
        <div className='accordian-heading'onClick={() => setShow(!show)}>
            <h4>{heading}</h4>
            <p onClick={() => setShow(!show)}>{show? "-": "+"}</p>
        </div>
        <div className='accordian-description'>
            {
                show &&  <p>{description}</p>
            }
        </div>
    </div>
    </>
  )
}

export default Accordian