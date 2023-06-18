import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <div class="footer text-center text-light">
        <h1 className="header-spacing">
          <span className="text-primary">J</span>UGNU{" "}
          <span className="text-primary">P</span>RAJAPTI
        </h1>
        <h4 className="header-spacing text-warning">FRONT END DEVELOPER</h4>
        <div className="p-4">
          <h5 className="follow">FOLLOW ME ON SOCIAL MEDIAS</h5>
          <div className="mt-4">
            <span className="p-2">
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookOutlinedIcon />
              </a>
            </span>
            <span className="p-2">
              <a href="https://web.whatsapp.com/" target="_blank">
                <WhatsAppIcon />
              </a>
            </span>
            <span className="p-2">
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon />
              </a>
            </span>
            <span className="p-2">
              <a href="https://www.instagram.com/" target="_blank">
                <LinkedInIcon />
              </a>
            </span>
            <span className="p-2">
              <a href="https://github.com/" target="_blank">
                <GitHubIcon />
              </a>
            </span>
          </div>
        </div>
        <p className="text-light fs-3">
          Made with <i className="fa fa-heart-o fs-3"></i> by Jugnu Prajapati
        </p>
        <small className="fs-5 mb-2">
          Copyright © 2023 Jugnu. All rights reserved
        </small>
      </div>
    </>
  );
};

export default Footer;
