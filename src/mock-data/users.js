// @ts-nocheck
import mock from "../utils/mock";

import { useParams } from "react-router-dom";
const siteURL = window.location.href;
let users = [
  {
    id: 1,
    username: "Kerem Koca",
    email: "kerem-koca@yandex.com",
    avatar: `${siteURL}/assets/images/avatar.jpg`,
    password: "12323123",
  },
  {
    id: 2,
    username: "Yucehan Kucukmotor",
    email: "yuce@gmail.com",
    avatar: `${siteURL}/assets/images/avatar-1.jpg`,
    password: "12323123",
  },
  {
    id: 3,
    username: "Emircan Kucukmotor",
    email: "emir@gmail.com",
    avatar: `${siteURL}/assets/images/avatar-2.jpg`,
    password: "12323123",
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
        if (
          user.email.toString() === email.toString() &&
          user.password.toString() === password.toString()
        ) {
          currentUser = JSON.parse(JSON.stringify(user));
          currentUser.password = undefined;
          return true;
        }
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
mock.onPatch(`api/users`).reply((config) => {
  let { username, email, avatar, password, id } = JSON.parse(config.data);
  console.log(config, email, password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasUser = users.some((user) => {
        if (id === user.id.toString()) {
          user = {
            id: id.toString(),
            username: username,
            email: email,
            password: password,
            avatar: avatar,
          };

          return true;
        }
        return user;
      });

      if (hasUser) {
        resolve([200, { code: 200, msg: "success" }]);
      } else {
        reject([500, { code: 500, msg: "failed" }]);
      }
    }, 1000);
  });
});
