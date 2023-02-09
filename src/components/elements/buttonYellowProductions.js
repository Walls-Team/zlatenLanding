import React from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../css/ButtonYellow.scss'

export default function ButtonYellowProductions({className}) {
  return (
    <div id="link" className={className}>
      <span className="button-yellow">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="btn-icon"
          color="#27232C"
        />
      </span>
      <span className="connect">VIEW ALL PRODUCTIONS</span>
    </div>
  );
}
