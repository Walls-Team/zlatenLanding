import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layouts/header';
import Productions from '../components/elements/productions';
import './css/Home.scss';
import { useTranslation } from 'react-i18next';


const Home = () => {

  const [t] = useTranslation("global");
  const [path, setPath] = useState('/')

  const handlerLinkTo = (link) => {
    setPath(link)
  }

  return (
    <div className="home">
      <Header />
      <div className='content-text'>
        <h2 style={{
          color: '#707070',
          fontWeight: '600',
        }}>{t("home.portafolio")}</h2>
        <h3 style={{
          color: '#27232C',
        }}>{t("home.help")}</h3>
        <p style={{
          color: '#707070',
        }}>{t("home.great")} </p>
      </div>
      <Link to='/portafolio/allProductions' onClick={() => handlerLinkTo('/portafolio/allProductions')}>
        <Productions />
      </Link>
      <div className='background'>
        <div className="content-text">
          <h2 style={{
            fontWeight: '400',
          }}>{t("home.about")}</h2>
          <h3>{t("home.makes")}</h3>
          <p>{t("home.projects")}</p>
        </div>
      </div>
    </div>
  )
}

export default Home