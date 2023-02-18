import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import PageDetails from "../components/elements/pageDetails";
import { DownloadIcon, VideoIcon } from "../svg/iconsproductions";
import "./css/Detail.scss";

const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const DetailProduct = () => {
  return (
    <>
      <div className="backgroundDetail" />
      <div className="contentDetail">
        <Link to="/portafolio/allProductions">
          <div className="itemsBack">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="btn-icon"
              color="#fff"
            />
            <h4>BACK TO ALL PROJECTS</h4>
          </div>
        </Link>
        <PageDetails
          title="portafolio"
          subTitle="Video Productions"
          icon={<VideoIcon />}
        />

        <video controls width="100%">
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>

        <div className="download">
          <div className="label">video I video adaptation </div>
          <DownloadIcon />
        </div>
        

        <p>
          <span style={{ fontSize: "1.7em" }}>L</span>orem ipsum dolor sit amet,
          consectetur adipiscing elit. Et vestibulum duis pulvinar diam
          pharetra. Velit et lacus vitae cras justo convallis. Condimentum enim
          hendrerit sit elementum. Integer ut dignissim nisi purus volutpat sit
          sit risus, condimentum. Eleifend pellentesque dolor tellus sapien
          senectus risus. Fivcioem ipsum dolor sit amet, consectetur adipiscing
          elit. Et vestibulum duis pulvinar diam pharetra. Velit et lacus vitae
          cras justo convallis. Condimentum enim hendrerit sit elementum.
          Integer ut dignissim nisi purus volutpat sit sit risus, condimentum.
          Eleifend pellentesque dolor tellus sapien senectus risus.
        </p>
      </div>
    </>
  );
};

export default DetailProduct;
