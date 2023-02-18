import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Productions.scss'
import ButtonYellow from './buttonYellow';
import {VideoIcon,AudioIcon,CreativeIcon,DigitalIcon,ThreeDIcon,TwoDIcon} from '../../svg/iconsproductions'
import { useTranslation } from 'react-i18next';

const Productions = () => {

  const [t] = useTranslation("global");

  return (
    <div>
      <div className="productions">
        <div className="item" to='/portafolio/video'>
          <VideoIcon/>
          <span>{t("productions.video")}</span>
          <p>{t("productions.adapation")}<br /> {t("productions.own")}</p>
        </div>
        <div className="item" to='/portafolio/audio'>
          <AudioIcon/>
          <span>{t("productions.audio")}</span>
          <p>{t("productions.sound")} <br />
          {t("productions.production")}</p>
        </div>
        <div className="item" to='/portafolio/2d'>
          <TwoDIcon/>
          <span>{t("productions.2d")}</span>
          <p>{t("productions.adapation")} <br />
          {t("productions.own")}</p>
        </div>
        <div className="item" to='/portafolio/creative'>
          <CreativeIcon/>
          <span>{t("productions.creative")}</span>
          <p>{t("productions.prepress")} <br />
          {t("productions.corporate")}<br />
          {t("productions.copywriting")}</p>
        </div>
        <div className="item" to='/portafolio/digital'>
          <DigitalIcon/>
          <span>{t("productions.digital")}</span>
          <p>{t("productions.media")} <br />
          {t("productions.prepress")} <br />
          {t("productions.corporate")}</p>
        </div>
        <div className="item" to='/portafolio/3d'>
          <ThreeDIcon/>
          <span>{t("productions.3d")}</span>
          <p>{t("productions.creative")} <br />
          {t("productions.adapation")} <br />
          {t("productions.own")}</p>
        </div>
      </div>
      <div className='contentbuttonYP'>
        <ButtonYellow text="VIEW ALL PRODUCTIONS"/>
      </div>
    </div>
  )
}

export default Productions