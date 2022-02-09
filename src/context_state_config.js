// @ts-nocheck
import Context from "utils/context";
import React, { useReducer, useEffect } from "react";
import * as AuthReducer from "./Store/Reducers/auth_reducer";
import * as PostsReducer from "./Store/Reducers/posts_reducer";
import PageRoutes from "PageRoutes";
import axios from "./utils/axios";

const ContextState = (props) => {
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );
  const [statePostsReducer, dispatchPostsReducer] = useReducer(
    PostsReducer.PostsReducer,
    PostsReducer.initialState
  );
  useEffect(() => {
    axios.get("api/posts").then((response) =>
      dispatchPostsReducer({
        type: "GET_POSTS",
        payload: response.data,
      })
    );

    axios.get("api/users").then((response) => {
      // @ts-ignore
      console.log(response.data);
      dispatchPostsReducer({
        type: "GET_USERS",
        payload: response.data,
      });
    });
  }, []);
  return (
    <div>
      <Context.Provider
        value={{
          stateAuthReducer,
          dispatchAuthReducer,
          statePostsReducer,
          dispatchPostsReducer,
        }}
      >
        <PageRoutes></PageRoutes>
      </Context.Provider>
    </div>
  );
};
export default ContextState;
