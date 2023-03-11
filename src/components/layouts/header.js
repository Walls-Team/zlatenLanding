import React from "react";
import "../css/Header.scss";
import Cards from "../cards/Cards";
import { useTranslation } from 'react-i18next';
import ButtonYellow from "../elements/buttonYellow";
import { Link } from "react-router-dom";

const Header = () => {
  const [t] = useTranslation("global");

  return (
    <div className="header">
      <div className="gradient" />
      <div className="content">
        <div className="content-elements">
          <h1 className="title">
            {t("header.provide")}<br /> {t("header.service")}<br /> {t("header.video")}
          </h1>
          <div className="contentbuttonH">
            <ButtonYellow text="SHARE YOUR IDEA" />
          </div>
        </div>
      </div>
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
};

export default Header;