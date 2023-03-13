import React from 'react'
import Productions from '../components/elements/productions'
import './css/About.scss';
import { useTranslation } from 'react-i18next';

const About = () => {

  const [t] = useTranslation("global");

  return (
    <div className="about">
      <div className="backgroundAbout" />
      <div className="mobile-backgroundAbout" />
      <div className="item-one">
        <span>{t("about.about")}</span>
        <h2>{t("about.header")}</h2>
        <p>{t("about.description")}</p>
      </div>
      <div className="images">
        <img className='img1' src='/about.png' alt='rectangle' />
        <img className='img2' src='/about2.png' alt='rectangle' />
      </div>
      <div className="item-two">
        <span>{t("about.about")}</span>
        <h2>{t("about.who")}</h2>
        <p>{t("about.history")}</p>
      </div>
      <Productions />
    </div>
  )
}

export default About