import React from "react";
import classes from "./Write.module.css";
import img from "../../Assets/write_img.jpeg";
function Write() {
  return (
    <div className={classes.write}>
      <img className={classes.write_img} src={img} alt="no img"></img>
      <form className={classes.writeForm}>
        <div className={classes.form_container}>
          <label htmlFor="fileInput">
            <i className={`${classes.write_icon} fas fa-plus`}></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }}></input>
          <input
            type="text"
            placeholder="Title"
            className={classes.input_title}
            autoFocus={true}
          ></input>
        </div>
        <div className={classes.form_container}>
          <textarea
            className={classes.input_text}
            type="text"
            placeholder="Enter your description"
          ></textarea>
        </div>
        <button className={classes.writeSubmitBtn}>Publish</button>
      </form>
    </div>
  );
}

export default Write;
