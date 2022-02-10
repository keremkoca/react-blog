export const initialState = {
  isAuthenticated: false,
  username: null,
  email: null,
  avatar: null,
  id: null,
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        userID: null,
        id: null,
        username: null,
        email: null,
        avatar: null,
        posts: [],
      };
    case "GET_USER":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        avatar: action.payload.avatar,
      };
    case "EDIT_USER":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        avatar: action.payload.avatar,
        password: action.payload.password,
      };
    case "DELETE_USER":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        avatar: action.payload.avatar,
        password: action.payload.password,
      };

    default:
      return state;
  }
};
