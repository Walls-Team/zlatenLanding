import React, { useState, useEffect } from "react";
import "./css/Portafolio.scss";
import { Link } from "react-router-dom";
import PageDetails from "../components/elements/pageDetails";
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

  useEffect(() => {});

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
            title="portafolio"
            subTitle="Our portafolio"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
          />
        );

      case 2:
        return (
          <PageDetails
            title="portafolio"
            subTitle="Video Productions"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
            icon={<VideoIcon />}
          />
        );

      case 3:
        return (
          <PageDetails
            title="portafolio"
            subTitle="Digital Productions"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
            icon={<DigitalIcon />}
          />
        );

      case 4:
        return (
          <PageDetails
            title="portafolio"
            subTitle="Creative Productions"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
            icon={<CreativeIcon />}
          />
        );

      case 5:
        return (
          <PageDetails
            title="portafolio"
            subTitle="Audio Productions"
            description="We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc."
            icon={<AudioIcon />}
          />
        );

      default:
        <div>default</div>;
    }
  };

  const cards = [
    {
      id: 1,
      title: "Project name",
      client: "Client: OLX",
      image: img2,
      formato: "Video | video adaptation",
      type: "video",
    },
    {
      id: 2,
      title: "Project name",
      client: "Client: OLX",
      image: img2,
      formato: "Audio | video adaptation",
      type: "audio",
    },
    {
      id: 3,
      title: "Project name",
      client: "Client: OLX",
      image: img2,
      formato: "2D | video adaptation",
      type: "twoD",
    },
    {
      id: 4,
      title: "Project name",
      client: "Client: OLX",
      image: img2,
      formato: "Creative | video adaptation",
      type: "creative",
    },
    {
      id: 5,
      title: "Project name",
      client: "Client: OLX",
      image: img2,
      formato: "Digital | video adaptation",
      type: "digital",
    },
    {
      id: 6,
      title: "Project name",
      client: "Client: OLX",
      image: img2,
      formato: "3D | video adaptation",
      type: "threeD",
    },
  ];

  const CardsPortafolio = cards.map((card) => (
    <Card
      title={card.title}
      id={card.id}
      imageSource={card.image}
      cliente={card.client}
      format={card.formato}
      type={card.type}
      link={"/portafolio/detail"}
    />
  ));

  return (
    <div className="portafolio">
      <div className="bgPortafolio">
      </div>

      <div className="content">
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
