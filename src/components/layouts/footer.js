import React from 'react';
import '../css/Footer.scss';
import { useTranslation } from 'react-i18next';
import { FacebookIcon, LinkedinIcon, VimeoIcon } from '../../svg/iconsproductions';



const Footer = () => {

  const [t] = useTranslation("global");

  return (
    <div className="footer">
      <span className="follow">{t("footer.follow")}</span>
      <div className="icons">
        <a href='www.facebook.com' target='blank' rel='noreferrer'>
          <FacebookIcon/>
        </a>
        <a href='www.facebook.com' target='blank' rel='noreferrer'>
          <LinkedinIcon/>
        </a>
        <a href='www.facebook.com' target='blank' rel='noreferrer'>
          <VimeoIcon/>
        </a>
      </div>
      <div className="right-reserved">
        <span>© 2022 zlatenvek.eu | Всички права запазени! | All rights reserved!</span>
      </div>
    </div>
  )
}

export default Footer
