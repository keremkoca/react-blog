import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PostDetail from "./Pages/PostDetail/PostDetail";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";

function PageRoutes() {
  const [showFooter, setShowFooter] = useState(false);
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<PostDetail />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {showFooter && <Footer></Footer>}
      </BrowserRouter>
    </div>
  );
}

export default PageRoutes;
