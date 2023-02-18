import React from "react";
import ButtonYellow from "../components/elements/buttonYellow";
import "./css/Contact.scss";
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const [t] = useTranslation("global");

  return (
    <div className="bg-contact-us">
      <div className="contact-us">
        <span className="connect-with">{t("contact.connect")}</span>
        <h1>
        {t("contact.discuss")} <br /> {t("contact.next")}
        </h1>
        <p>
        {t("contact.questions")}
        </p>
        <div className="with-us">
          <div>
            <img src="/Ellipse.png" alt="elipse" />
            <span>+ 359 2 944 2568 / + 359 2 944 1043</span>
          </div>
          <div>
            <img src="/Ellipse.png" alt="elipse" />
            <span>22 Bogatitsa str., Sofia, Bulgaria</span>
          </div>
          <div>
            <img src="/Ellipse.png" alt="elipse" />
            <span>office@zlatenvek.eu</span>
          </div>
        </div>
        <div className="form">
          <input type="text" id="standard-basic" placeholder="Name*" />
          <input type="text" id="standard-basic" placeholder="Surname*" />
          <input type="text" id="standard-basic" placeholder="Email*" />
          <input type="text" id="standard-basic" placeholder="Phone*" />
          <input
            className="lastText"
            type="text"
            id="standard-basic"
            placeholder="Write us a message"
          />
        </div>

        <ButtonYellow text="SUBMIT YOUR IDEA"/>
      </div>
    </div>
  );
};

export default Contact;
