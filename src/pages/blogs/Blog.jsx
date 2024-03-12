import React,{useState} from 'react'
import './Blog.css'
import {contents} from './api'
import Accordian from './Accordian'
 
const Blog = () => {
  const [data, setData] = useState(contents);
  return (
    <div className='blog-container'>
      <div className='blog-accordian-container'>
        {
          data.map( (curElem)=>{ 
            const {id} = curElem;
            return <Accordian key={id} {...curElem} />; 
          })
        }
        </div>
    </div>
  )
}

export default Blog