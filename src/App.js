import "./mock-data";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import React, { useEffect, useReducer } from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import axios from "./utils/axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "./Pages/PostDetail/PostDetail";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
const initialState = {
  headerPosts: [],
  users: [],
  authenticatedUser: {
    isAuthenticated: false,
    username: null,
    email: null,
    avatar: null,
    userID: null,
    posts: [],
  },
};

// @ts-ignore
const userCreater = (users) => {
  users = users.map((user) => {
    return {
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      userID: user.id,
      posts: user.posts,
    };
  });
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_HEADER_POSTS":
      return {
        ...state,
        headerPosts: action.payload,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        authenticatedUser: {
          isAuthenticated: true,
          userID: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          avatar: action.payload.avatar,
          posts: action.payload.posts,
        },
      };
    case "LOGOUT":
      return {
        ...state,
        authenticatedUser: {
          isAuthenticated: false,
          userID: null,
          username: null,
          email: null,
          avatar: null,
          posts: [],
        },
      };

    default:
      break;
  }
};
export const AuthContext = React.createContext(initialState);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("api/default-posts").then((response) =>
      // @ts-ignore
      dispatch({
        type: "GET_HEADER_POSTS",
        payload: response.data.posts,
      })
    );

    axios.get("api/users").then((response) => {
      // @ts-ignore
      dispatch({
        type: "GET_USERS",
        payload: response.data,
      });
    });
  }, []);

  return (
    <div className="site-wrapper">
      <AuthContext.Provider
        // @ts-ignore
        value={{
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
