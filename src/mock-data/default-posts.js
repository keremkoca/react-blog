import mock from "../utils/mock";
import cookies from "../Assets/PostImages/cookies.jpg";
import drink from "../Assets/PostImages/drink.jpg";
import religion from "../Assets/PostImages/religion.jpg";
import streat from "../Assets/PostImages/street.jpg";
import tech from "../Assets/PostImages/tech.jpeg";
mock.onGet("api/default-posts").reply(200, {
  posts: [
    {
      id: "d1",
      img: cookies,
      title: "Delicious cookies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: "d2",
      img: drink,
      title: "Did you try this cocktails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: "d3",
      img: religion,
      title: "Best religion ever",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: "d4",
      img: streat,
      title: "A view from Long Streat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: "d5",
      img: tech,
      title: "Axios interceptors is the best",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
  ],
});
