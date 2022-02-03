import mock from "../utils/mock";
import animal from "Assets/PostImages/animal.jpg";
import art from "Assets/PostImages/art.jpg";
import books from "Assets/PostImages/books.jpg";
import food from "Assets/PostImages/food.jpg";
import forest from "Assets/PostImages/forest.jpg";
import night from "Assets/PostImages/night.jpg";
import sport from "Assets/PostImages/sport.jpg";
import sunset from "Assets/PostImages/sunset.jpg";
import tech from "Assets/PostImages/technology.jpg";
import avatar from "Assets/UserAvatars/avatar.jpg";
import avatar1 from "Assets/UserAvatars/avatar-1.jpg";
import avatar2 from "Assets/UserAvatars/avatar-2.jpg";
let users = [
  {
    id: 1,
    username: "Kerem Koca",
    email: "kerem-koca@yandex.com",
    avatar: avatar,
    password: "12323123",
    createdAt: new Date().toISOString(),
    posts: [
      {
        id: 1,
        img: animal,
        title: "Flying Whales",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
      },
      {
        id: 2,
        img: art,
        title: "A Creative Perspective",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
      },
      {
        id: 3,
        img: food,
        title: "A new restaurant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
      },
    ],
  },
  {
    id: 2,
    name: "Yucehan Kucukmotor",
    email: "yuce@gmail.com",
    avatar: avatar1,
    password: "12323123",
    posts: [
      {
        id: 4,
        img: books,
        title: "Is ignorance is bliss?",
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
      {
        id: 6,
        img: sunset,
        title: "Sunset from above",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
      },
    ],
  },
  {
    id: 3,
    name: "Emircan Kucukmotor",
    email: "emir@gmail.com",
    avatar: avatar2,
    password: "12323123",
    posts: [
      {
        id: 7,
        img: forest,
        title: "Destruction of rainforests increasing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
      },
      {
        id: 8,
        img: night,
        title: "Did you check your bill?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
      },
      {
        id: 9,
        img: sport,
        title: "A new court is opening",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
      },
    ],
  },
];
mock.onGet("api/users").reply(200, users);
mock.onPost("api/users/login").reply((config) => {
  let { email, password } = JSON.parse(config.data);
  console.log(config, email, password);
  return new Promise((resolve, reject) => {
    let currentUser = null;
    setTimeout(() => {
      let hasUser = users.some((user) => {
        console.log(user.email, email, user.password, password, user);
        if (
          user.email.toString() === email.toString() &&
          user.password.toString() === password.toString()
        ) {
          currentUser = JSON.parse(JSON.stringify(user));
          console.log("girdi");
          currentUser.password = undefined;
          return true;
        }
        console.log(user);
        return user;
      });

      if (hasUser) {
        resolve([200, { code: 200, msg: "success", currentUser }]);
      } else {
        reject([500, { code: 500, msg: "failed" }]);
      }
    }, 1000);
  });
});
mock.onPost("api/users/register").reply((config) => {
  let { username, email, password } = JSON.parse(config.data);
  console.log(username, email, password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasUser = users.some((user) => {
        if (
          user.email.toString() === email.toString() &&
          user.username.toString() === username.toString()
        ) {
          return false;
        } else {
          users.push({
            id: users.length + 1,
            username: username,
            email: email,
            avatar: null,
            password: password,
            posts: [],
          });
        }
        return user;
      });

      if (hasUser) {
        resolve([200, { code: 200, msg: "success" }]);
      } else {
        reject([500, { code: 500, msg: "Already has account" }]);
      }
    }, 1000);
  });
});
