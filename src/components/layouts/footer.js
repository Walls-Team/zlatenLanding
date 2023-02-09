import React from 'react';
import '../css/Footer.scss';
import { useTranslation } from 'react-i18next';



const Footer = () => {

  const [t] = useTranslation("global");

  return (
    <div className="footer">
      <span className="follow">{t("footer.follow")}</span>
      <div className="icons">
        <a href='www.facebook.com' target='blank' rel='noreferrer'>
          <img  src='/facebook.png' alt='facebook'/>
        </a>
        <a href='www.facebook.com' target='blank' rel='noreferrer'>
          <img  src='/linkedin.png' alt='linkedin'/>
        </a>
        <a href='www.facebook.com' target='blank' rel='noreferrer'>
          <img  src='/vimeo.png' alt='vimeo'/>
        </a>
      </div>
      <div className="right-reserved">
        <span>© 2022 zlatenvek.eu | Всички права запазени! | All rights reserved!</span>
      </div>
    </div>
  )
}

export default Footer
