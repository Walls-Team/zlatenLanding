import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { DownloadIcon } from '../../svg/iconsproductions'
import '../css/Card.scss'


function Card({title, imageSource, cliente, format,type,id,link="/"}) {
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
      <img src={imageSource} alt="" className='product--image'/>
      <Link to={link}>
      <div className ="card-body">
           <h4>{title}</h4>
           <h3>{cliente}</h3>
           <p>Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.</p>
           <div className='contentElementsCard'>
            <div style={{background: '#EBFFFF' }}>{format}</div>
            <DownloadIcon/>
           </div>
      </div>
      </Link>
    </div>

  )
}
export default Card