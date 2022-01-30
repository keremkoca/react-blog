import mock from "../utils/mock";
import cookies from "../Assets/cookies.jpg";
import drink from "../Assets/drink.jpg";
import religion from "../Assets/religion.jpg";
import streat from "../Assets/street.jpg";
import tech from "../Assets/tech.jpeg";
mock.onGet("api/default-posts").reply(200, {
  posts: [
    {
      id: 1,
      img: cookies,
      title: "Delicious cookies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: 2,
      img: drink,
      title: "Did you try this cocktails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: 3,
      img: religion,
      title: "Best religion ever",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: 4,
      img: streat,
      title: "A view from Long Streat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
    {
      id: 5,
      img: tech,
      title: "Axios interceptors is the best",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
    },
  ],
});
