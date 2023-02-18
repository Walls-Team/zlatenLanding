import React from 'react';
import Header from '../components/layouts/header';
import Productions from '../components/elements/productions';
import './css/Home.scss';
import { useTranslation } from 'react-i18next';


const Home = () => {

  const [t] = useTranslation("global");
  
  return (
    <div className="home">
      <Header /> 
      <div className='content-text'>
        <h2>{t("home.portafolio")}</h2>
        <h3>{t("home.help")}</h3>
        <p>{t("home.great")} </p>
      </div>
       <Productions />
      <div className='background'>
      <div className="content-text">
        <h2>{t("home.about")}</h2>
        <h3>{t("home.makes")}</h3>
        <p>{t("home.projects")}</p>
      </div>
      </div>
    </div>
  )
}

export default Home