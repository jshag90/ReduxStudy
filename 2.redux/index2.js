const { createStore } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut, addPost } = require("./actions/action");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});
console.log("1st", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "seonhak",
    admin: true,
  })
);
console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);
console.log("3rd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "안녕하세요. 리덕스2",
  })
);
console.log("4th", store.getState());

store.dispatch(logOut());

console.log("5th", store.getState());
