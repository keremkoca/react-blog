import React from "react";
import classes from "./Home.module.css";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
function Home() {
  return (
    <div className={classes.container}>
      <Header></Header>
      <Posts></Posts>
    </div>
  );
}

export default Home;
