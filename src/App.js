import "./mock-data";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import React, { useEffect, useState, useContext, useReducer } from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import axios from "./utils/axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "./Pages/PostDetail/PostDetail";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
const initialState = {
  isAuthenticated: false,
  username: null,
  email: null,
  avatar: null,
  posts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.selectedUser.username,
        email: action.payload.selectedUser.email,
        avatar: action.payload.selectedUser.avatar,
      };

    default:
      break;
  }
};
export const HeaderContext = React.createContext(initialState);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("sending request");
    axios
      .get("api/default-posts")
      .then((response) => setPosts(response.data.posts));
  }, []);
  console.log(posts);

  return (
    <div className="site-wrapper">
      <HeaderContext.Provider
        value={{
          posts,
          state,
          dispatch,
        }}
      >
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
          <Footer></Footer>
        </BrowserRouter>
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
