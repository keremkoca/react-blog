export const initialState = {
  posts: [],
  users: [],
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            featured: action.payload.featured,
            userID: action.payload.userID,
            id: action.payload.id,
            img: action.payload.img,
            createdAt: new Date().toISOString(),
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };
    case "EDIT_POST":
      [...state.posts].map((post) => {
        if (post.id === action.payload.id) {
          post.createdAt = new Date().toISOString();
          post.title = action.payload.title;
          post.description = action.payload.description;
        }
        return post;
      });
      return {
        ...state,
      };

    default:
      return state;
  }
};
