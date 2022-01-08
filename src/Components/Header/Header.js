import React from "react";
import classes from "./Header.module.css";
import newsImg from "/Users/emir/Desktop/blog-app/src/Assets/news_img.jpeg";
function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.header_container_left}>
        <div className={classes.header_news_side}>
          <img
            className={classes.header_news_img}
            alt="no img"
            src={newsImg}
          ></img>
          <div className={classes.header_news_info}>
            <span className={classes.header_news_title}>
              Lorem ipsum dolor sit amet
            </span>
            <span className={classes.header_news_date}>1 hour ago</span>
          </div>
        </div>
        <div className={classes.header_news_side}>
          <img
            className={classes.header_news_img}
            alt="no img"
            src={newsImg}
          ></img>
          <div className={classes.header_news_info}>
            <span className={classes.header_news_title}>
              Lorem ipsum dolor sit amet
            </span>
            <span className={classes.header_news_date}>1 hour ago</span>
          </div>
        </div>
      </div>
      <div className={classes.header_container_mid}>
        <div className={classes.header_news}>
          <img
            className={classes.header_news_img}
            alt="no img"
            src={newsImg}
          ></img>
          <div className={classes.header_news_info}>
            <span className={classes.header_news_title}>
              Lorem ipsum dolor sit amet
            </span>
            <span className={classes.header_news_date}>1 hour ago</span>
          </div>
        </div>
      </div>
      <div className={classes.header_container_right}>
        <div className={classes.header_news_side}>
          <img
            className={classes.header_news_img}
            alt="no img"
            src={newsImg}
          ></img>
          <div className={classes.header_news_info}>
            <span className={classes.header_news_title}>
              Lorem ipsum dolor sit amet
            </span>
            <span className={classes.header_news_date}>1 hour ago</span>
          </div>
        </div>
        <div className={classes.header_news_side}>
          <img
            className={classes.header_news_img}
            alt="no img"
            src={newsImg}
          ></img>
          <div className={classes.header_news_info}>
            <span className={classes.header_news_title}>
              Lorem ipsum dolor sit amet
            </span>
            <span className={classes.header_news_date}>1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
