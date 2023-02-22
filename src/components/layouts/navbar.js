import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/Navbar.scss';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [t, i18n] = useTranslation("global");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem("language", language);
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <div>
            <Link to='/'>
              <img className="nav-logo" src='/logo.png' alt='logo-zlaten' />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item-menu">
            <Link className='navbar-link' to='/'>{t("navbar.home")}</Link>
          </div>
          <div className="item-menu">
            <Link className='navbar-link' to='/about'>{t("navbar.about")}</Link>
          </div>
          <div className="item-menu">
            <Link className='navbar-link' to='/portafolio/allProductions'>{t("navbar.portafolio")}</Link>
          </div>
          <div className="item-menu">
            <Link className='link' to='/contact'>
              <span className='button-yellow'>
                <FontAwesomeIcon icon={faChevronRight} className="btn-icon" color="#27232C" />
              </span>
              <span className='connect'>{t("navbar.connect")}</span>
            </Link>
          </div>
          <div className="item-menu" onClick={() => changeLanguage("en")}>
            <div className={`language ${i18n.resolvedLanguage == 'en' ? 'selected-language' : ''}`}> EN </div>
          </div>
          <div className="item-menu" onClick={() => changeLanguage("bg")}>
            <div className={`language ${i18n.resolvedLanguage == 'bg' ? 'selected-language' : ''}`}>BG</div>
          </div>
        </div>

        {/*button for mobile */}
        <button className="btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FontAwesomeIcon icon={faBars} size="2x" className="btn-icon" color="#27232C" />
        </button>
      </div>
      <div className='nav-mg'></div>

      {/*menu for mobile */}
      <div className={`mobile-menu ${showMobileMenu ? 'mobile-menu-show' : 'mobile-menu-hide'}`}>
        <div className="item-menu">
          <Link className='mobile-menu-link' to='/'>{t("navbar.home")}</Link>
        </div>
        <div className="item-menu">
          <Link className='mobile-menu-link' to='/about'>{t("navbar.about")}</Link>
        </div>
        <div className="item-menu">
          <Link className='mobile-menu-link' to='/portafolio/allProductions'>{t("navbar.portafolio")}</Link>
        </div>
        <div className="item-menu">
          <Link className='mobile-menu-link' to='/contact'>{t("navbar.connect")}</Link>
        </div>
        <div className='mobile-language-container'>
          <div className="item-menu" onClick={() => changeLanguage("en")}>
            <div className={`language ${i18n.resolvedLanguage == 'en' ? 'selected-language' : ''}`}> EN </div>
          </div>
          <span className="mrg-lang"> / </span>
          <div className="item-menu" onClick={() => changeLanguage("bg")}>
            <div className={`language mrg-lang ${i18n.resolvedLanguage == 'bg' ? 'selected-language' : ''}`}>BG</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar