import mock from "../utils/mock";
import moment from "moment";
const siteURL = window.location.href;

let date = moment();
const h = date.hour();
const m = date.minute();
let posts = [
  {
    featured: false,
    id: "d1",
    img: `${siteURL}/assets/images/cookies.jpg`,
    title: "Delicious cookies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: false,
    id: "d2",
    img: `${siteURL}/assets/images/drink.jpg`,
    title: "Did you try this cocktails",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: false,
    id: "d3",
    img: `${siteURL}/assets/images/religion.jpg`,
    title: "Best religion ever",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: false,
    id: "d4",
    img: `${siteURL}/assets/images/street.jpg`,
    title: "A view from Long Streat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: false,
    id: "d5",
    img: `${siteURL}/assets/images/technology.jpg`,
    title: "Axios interceptors is the best",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 1,
    id: 1,
    img: `${siteURL}/assets/images/animal.jpg`,
    createdAt: date.set({ minute: m - 5 }).toISOString(),
    title: "Flying Whales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 1,
    id: 2,
    img: `${siteURL}/assets/images/art.jpg`,
    createdAt: date.set({ minute: m - 1 }).toISOString(),
    title: "A Creative Perspective",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 1,
    id: 3,
    img: `${siteURL}/assets/images/food.jpg`,
    createdAt: date.set({ minute: m - 12 }).toISOString(),
    title: "A new restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 2,
    id: 4,
    img: `${siteURL}/assets/images/books.jpg`,
    createdAt: date.set({ minute: m - 3 }).toISOString(),
    title: "Is ignorance is bliss?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 2,
    id: 5,
    img: `${siteURL}/assets/images/tech.jpg`,
    createdAt: date.set({ minute: m - 5 }).toISOString(),
    title: "Axios interceptors is the best",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 2,
    id: 6,
    img: `${siteURL}/assets/images/sunset.jpg`,
    createdAt: date.set({ minute: m - 7 }).toISOString(),
    title: "Sunset from above",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 3,
    id: 7,
    img: `${siteURL}/assets/images/forest.jpg`,
    createdAt: date.set({ minute: m - 30 }).toISOString(),
    title: "Destruction of rainforests",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 3,
    id: 8,
    img: `${siteURL}/assets/images/night.jpg`,
    createdAt: date.set({ minute: m - 11 }).toISOString(),
    title: "Did you check your bill?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
  {
    featured: true,
    userID: 3,
    id: 9,
    img: `${siteURL}/assets/images/sport.jpg`,
    createdAt: date.set({ minute: m - 4 }).toISOString(),
    title: "A new court is opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus",
  },
];
mock.onGet("api/posts").reply(200, posts);
mock.onPost("api/posts").reply((config) => {
  console.log(config.data);
  let { featured, userID, id, img, createdAt, title, description } = JSON.parse(
    config.data
  );
  console.log(featured, userID, id, img, createdAt, title, description);
  let newPost = {
    featured: featured,
    userID: userID,
    id: id,
    img: img,
    createdAt: createdAt,
    title: title,
    description: description,
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      let hasPost = posts.some((post) => {
        if (post.id === newPost.id) {
          return true;
        } else return false;
      });

      if (hasPost) {
        resolve([200, { code: 200, msg: "success", newPost }]);
      } else {
        reject([500, { code: 500, msg: "failed" }]);
      }
    }, 1000);
  });
});
