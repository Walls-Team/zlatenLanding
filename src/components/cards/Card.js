import { text } from '@fortawesome/fontawesome-svg-core'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Card.scss'

function Card({title, text, imageSource, cliente, format,type,id,link="/", download, preview}) {
  const [info, setInfo] = useState()
  
  const types = {
    audio : {color: "#EBFFFF"},
    video : { color: "#EFD9CE"},
    twoD : { color: "#C8E2F5"},
    creative : {color: "#FFFAC9"},
    digital : {color:"#DFF0E8"},
    threeD : {color: "#EBE9F5"},
  }
  useEffect(() => {
    setInfo(types[type])
    // eslint-disable-next-line
  },[title])

  return (
    <div className = "card" key={id}>
      <div id='container'>
      <div id='preview-client'>{preview}</div>
       <img src={imageSource} alt="" className='product--image'/>
       </div>
       <Link to={link}>
      <div className ="card-body">
           <h4>{title}</h4>
           <h3>{cliente}</h3>
           <p style={{
            fontFamily:'Open Sans',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
            color: '#707070',
           }}
           >{text}
            </p>
           <div className='contentElementsCard'>
            <span className='format'>{format}</span>
            {download}
           </div>
      </div>
      </Link>
    </div>

  )
}
export default Card