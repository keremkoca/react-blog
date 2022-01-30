import mock from "../utils/mock";
import cookies from "../Assets/cookies.jpg";
import drink from "../Assets/drink.jpg";
import religion from "../Assets/religion.jpg";
import streat from "../Assets/street.jpg";
import tech from "../Assets/tech.jpeg";
let users = [
  {
    id: 1,
    name: "Kerem Koca",
    email: "kerem-koca@yandex.com",
    avatar: drink,
    password: "12323123",
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
  },
  {
    id: 2,
    name: "Juan Gonzalez",
    email: "jcgonzalez@cognox.com",
    introductionMd: "",
    introductionHtml: "<h1>Juan Carlos Gonzalez</h1>",
  },
  {
    id: 3,
    name: "Andres Restrepo",
    email: "arestrepo@cognox.com",
    introductionMd: "## Andres",
    introductionHtml: "<h2>Andres</h2>",
  },
];
mock.onPost("api/users").reply((config) => {
  let { email, password } = JSON.parse(config.data);
  console.log(email, password);
  return new Promise((resolve, reject) => {
    let selectedUser = null;
    setTimeout(() => {
      let hasUser = users.some((user) => {
        if (user.email == email && user.password == password) {
          selectedUser = JSON.parse(JSON.stringify(user));
          user.password = undefined;
          return true;
        }
      });

      if (hasUser) {
        resolve([200, { code: 200, msg: "success", selectedUser }]);
      } else {
        resolve([200, { code: 500, msg: "failed", selectedUser }]);
      }
    }, 1000);
  });
});
