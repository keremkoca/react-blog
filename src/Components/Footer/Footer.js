import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_box}>
        <div className={classes.footer_row}>
          <div className={classes.footer_column}>
            <h1 className={classes.footer_header}>About Project</h1>
            <div className={classes.footer_link}>
              <span>Readme</span>
            </div>
            <div className={classes.footer_link}>
              <span>Technologies</span>
            </div>
          </div>
          <div className={classes.icon_container}>
            <div className={classes.footer_icon}>
              <i className="fab fa-facebook-square"></i>
            </div>
            <div className={classes.footer_icon}>
              <i className="fab fa-instagram-square"></i>
            </div>
            <div className={classes.footer_icon}>
              <i className="fab fa-twitter-square"></i>
            </div>
            <div className={classes.footer_icon}>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
