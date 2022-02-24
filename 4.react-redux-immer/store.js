const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const reducer = require("./reducers");
// const { addPost } = require("./actions/post");
// const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("액션 로깅", action);
  next(action);
  console.log("액션 끝", action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    //비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); //동기
};

const enhancer = composeWithDevTools(
  applyMiddleware(firstMiddleware, thunkMiddleware)
);

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
