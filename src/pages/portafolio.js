import React, { useState, useEffect } from "react";
import "./css/Portafolio.scss";
import { Link } from "react-router-dom";
import PageDetails from "../components/elements/pageDetails";
import { DownloadIcon, Play, PlayMusic } from '../svg/iconsproductions'
import {
  VideoIcon,
  AudioIcon,
  CreativeIcon,
  DigitalIcon,
} from "../svg/iconsproductions";
import img2 from "../assets/cliente1.png";
import Card from "../components/cards/Card";

const Portafolio = () => {
  const [selected, setSelected] = useState(1);
  const screenWidth = window.innerWidth;

  useEffect(() => { });

  const onClickSelected = (number) => {
    setSelected(number);
  };

  const returnComponentMenu = () => {
    return (
      <div className="layout">
        <button
          onClick={() => onClickSelected(1)}
          className={selected === 1 ? "activado" : ""}
        >
          all productions
        </button>
        <button
          onClick={() => onClickSelected(2)}
          className={selected === 2 ? "activado" : ""}
        >
          video
          <span>112</span>
        </button>
        <button
          onClick={() => onClickSelected(3)}
          className={selected === 3 ? "activado" : ""}
        >
          digital
          <span>92</span>
        </button>
        <button
          onClick={() => onClickSelected(4)}
          className={selected === 4 ? "activado" : ""}
        >
          creative
          <span>30</span>
        </button>
        <button
          onClick={() => onClickSelected(5)}
          className={selected === 5 ? "activado" : ""}
        >
          audio
          <span>44</span>
        </button>
      </div>
    );
  };

  const returnComponentSelect = () => {
    switch (selected) {
      case 1:
        return (
          <PageDetails
            title="portfolio"
            subTitle="Our portfolio"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
          />
        );

      case 2:
        return (
          <PageDetails
            title="portfolio"
            subTitle="Video productions"
            description="We do not promise big things. We do great things, because we know that in the world of promises you can die of hunger.  We focus on TV advertising, Music videos, Corporate films and Documentaries."
            icon={<VideoIcon width={screenWidth <= 500 ? 80 : 80} />}
          />
        );

      case 3:
        return (
          <PageDetails
            title="portfolio"
            subTitle="Digital productions"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
            icon={<DigitalIcon width={screenWidth <= 500 ? 80 : 80} />}
          />
        );

      case 4:
        return (
          <PageDetails
            title="portfolio"
            subTitle="Creative productions"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
            icon={<CreativeIcon width={screenWidth <= 500 ? 80 : 80} />}
          />
        );

      case 5:
        return (
          <PageDetails
            title="portfolio"
            subTitle="Audio productions"
            description="The secret of the sounds is that they find an inexhaustible source of expression where the vision is silent. Sound recording; Production of radio commercials; Adaptations of TV Ads; Sound Effects; Doubling; Original music."
            icon={<AudioIcon width={screenWidth <= 500 ? 80 : 80} />}
          />
        );

      default:
        <div>default</div>;
    }
  };

  const adjustItems = () => {
    switch (selected) {
      case 1:
        return '';

      case 2:
        return 'video-responsive';

      case 3:
        return 'audio-responsive';

      case 4:
        return 'audio-responsive';

      case 5:
        return 'video-responsive';

      default:
        return '';
    }


  }

  const cards = [
    {
      id: 1,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "video | video adaptation",
      type: "video",
      preview: <Play />,
      view: "view more",
    },
    {
      id: 2,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "audio | video adaptation",
      type: "audio",
      preview: <PlayMusic />,
      view: "view more",
    },
    {
      id: 3,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "2D | video adaptation",
      type: "twoD",
      preview: <Play />,
      view: "view more",
    },
    {
      id: 4,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "creative | video adaptation",
      type: "creative",
      view: "view more",
    },
    {
      id: 5,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "digital | video adaptation",
      type: "digital",
      view: "view more",
    },
    {
      id: 6,
      title: "Project name",
      client: "Client: OLX",
      text: "Short description of the project goes here.  Ipsum dolor sit amet, consectetur adipiscing elit fsfffee.",
      image: img2,
      formato: "3D | video adaptation",
      type: "threeD",
      preview: <Play />,
      view: "view more",
    },
  ];

  const CardsPortafolio = cards.map((card) => (
    <Card
      title={card.title}
      id={card.id}
      imageSource={card.image}
      cliente={card.client}
      format={card.formato}
      text={card.text}
      type={card.type}
      preview={card.preview}
      link={"/portafolio/detail"}
      download={<DownloadIcon />}
      view={card.view}
    />
  ));

  return (
    <div className="portafolio">
      {/* <div className="bgPortafolio"></div> */}
      <div className={`content ${screenWidth <= 636 ? adjustItems() : ''}`}>
        <div className="contentPageDetail">{returnComponentSelect()}</div>
        {returnComponentMenu()}
      </div>
      <div className="Content-CardsPort">{CardsPortafolio}</div>
      <div className="leadmore">
        <Link to="/portafolio/allProductions">
          <span>load more</span>
        </Link>
      </div>
    </div>
  );
};

export default Portafolio;
