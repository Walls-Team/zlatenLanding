import React from 'react'
import Card from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../css/CardsCarrousel.scss';
import img2 from '../../assets/cliente1.png';
import { DownloadIcon } from '../../svg/iconsproductions'

export default function Cards() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const cards = [
    {
      id: 1,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "Video | video adaptation",
      type: "video"
    },
    {
      id: 2,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "Audio | video adaptation",
      type: "audio"
    },
    {
      id: 3,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "2D | video adaptation",
      type: "twoD"
    },
    {
      id: 4,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "Creative | video adaptation",
      type: "creative"
    },
    {
      id: 5,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "Digital | video adaptation",
      type: "digital"
    },
    {
      id: 6,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "3D | video adaptation",
      type: "threeD"
    },
  ]

  const ArrowRight = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M29.0202 32.9091C28.8796 33.0497 28.7191 33.1751 28.5225 33.2624C28.3238 33.3508 28.1139 33.3889 27.8889 33.3889C27.6639 33.3889 27.454 33.3508 27.2553 33.2624C27.0587 33.1751 26.8982 33.0497 26.7576 32.9091L18.9798 25.1313C18.3401 24.4916 18.3401 23.5083 18.9798 22.8686L26.7576 15.0909C27.3973 14.4512 28.3805 14.4512 29.0202 15.0909C29.6599 15.7306 29.6599 16.7138 29.0202 17.3535L22.3738 24L29.0202 30.6464C29.6599 31.2861 29.6599 32.2694 29.0202 32.9091Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24C45 35.598 35.598 45 24 45ZM24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48Z" fill="white" />
        <rect x="-1.5" y="1.5" width="45" height="45" rx="22.5" transform="matrix(-1 0 0 1 45 0)" stroke="white" stroke-width="3" />
      </svg>
    </div>
  )
  const ArrowLeft = ({ onClick, className }) => (
    <div onClick={onClick} className={className}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.9798 32.9091C19.1204 33.0497 19.2809 33.1751 19.4775 33.2624C19.6762 33.3508 19.8861 33.3889 20.1111 33.3889C20.3361 33.3889 20.546 33.3508 20.7447 33.2624C20.9413 33.1751 21.1018 33.0497 21.2424 32.9091L29.0202 25.1313C29.6599 24.4916 29.6599 23.5083 29.0202 22.8686L21.2424 15.0909C20.6027 14.4512 19.6195 14.4512 18.9798 15.0909C18.3401 15.7306 18.3401 16.7138 18.9798 17.3535L25.6262 24L18.9798 30.6464C18.3401 31.2861 18.3401 32.2694 18.9798 32.9091Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45ZM24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white" />
        <rect x="1.5" y="1.5" width="45" height="45" rx="22.5" stroke="white" stroke-width="3" />
      </svg>
    </div>

  )

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <ArrowRight className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <ArrowLeft className="carousel-button-left" onClick={() => next()} />
      </div>
    );
  };

  const cards_ = cards.map(card =>
    <div key={card.id}>
      <Card title={card.title} imageSource={card.image} text={card.text} cliente={card.client} format={card.formato} type={card.type} download={<DownloadIcon/>}
      />
    </div>
  )
  return (
    <div className='clientes'>
      <Carousel responsive={responsive}  arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} className="carousel">
        {cards_}
      </Carousel>
    </div>

  );
}  
