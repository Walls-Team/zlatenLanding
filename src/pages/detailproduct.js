import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PageDetails from "../components/elements/pageDetails";
import { DownloadIcon, VideoIcon, Preview } from "../svg/iconsproductions";
import "./css/Detail.scss";
import img1 from "../assets/olx1.png";
import img2 from "../assets/olx2.png";
import img3 from "../assets/olx3.png";
import img4 from "../assets/olx4.png";
import img5 from "../assets/olx5.png";
import img6 from "../assets/olx6.png";
import Card from "../components/cards/Card";

const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

   

const DetailProduct = () => {
  const [selected] = useState(false); 
  const images = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
  ];

  const CardsImages = images.map((card) => (
    <Card
      id={card.id}
      imageSource={card.image}
      preview={<Preview/>}
      link={"/portafolio/detail"}
    />
    ));
  return (
    <>
      <div className="backgroundDetail" />
      <div className="contentDetail">
        <Link to="/portafolio/allProductions">
          <div className="itemsBack">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="btn-icon"
              color="#fff"
            />
            <h4>BACK TO ALL PROJECTS</h4>
          </div>
        </Link>
        <PageDetails
          title="portafolio"
          subTitle="Video Productions"
          icon={<VideoIcon />}
        />

        <video controls width="100%">
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>

        <div className="download">
          <div className="label">video I video adaptation </div>
          <DownloadIcon />
        </div>
        

        <p>
          <span style={{ fontSize: "1.7em"}}>L</span>orem ipsum dolor sit amet,
          consectetur adipiscing elit. Et vestibulum duis pulvinar diam
          pharetra. Velit et lacus vitae cras justo convallis. Condimentum enim
          hendrerit sit elementum. Integer ut dignissim nisi purus volutpat sit
          sit risus, condimentum. Eleifend pellentesque dolor tellus sapien
          senectus risus. Fivcioem ipsum dolor sit amet, consectetur adipiscing
          elit. Et vestibulum duis pulvinar diam pharetra. Velit et lacus vitae
          cras justo convallis. Condimentum enim hendrerit sit elementum.
          Integer ut dignissim nisi purus volutpat sit sit risus, condimentum.
          Eleifend pellentesque dolor tellus sapien senectus risus.
        </p>
      </div>
      <div className={selected === true ? "Content-CardsImg" : "hidden"}>{CardsImages}</div> 
    </>
  );
  
};
export default DetailProduct;
