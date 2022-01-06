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
              <i className="fab fa-facebook-f">Readme</i>
            </div>
            <div className={classes.footer_link}>
              <i className="fab fa-facebook-f">Technologies</i>
            </div>
          </div>
          <div className={classes.footer_column}>
            <h1 className={classes.footer_header}>Social Media</h1>
            <div className={classes.footer_link}>
              <i className="fab fa-facebook-f">facebook</i>
            </div>
            <div className={classes.footer_link}>
              <i className="fab fa-instagram">instagram</i>
            </div>
            <div className={classes.footer_link}>
              <i className="fab fa-twitter">twitter</i>
            </div>
            <div className={classes.footer_link}>
              <i className="fab fa-youtube">youtube</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
