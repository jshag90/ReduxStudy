const { createStore, applyMiddleware } = require("redux");
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

const middlewares = [];
middlewares.push(firstMiddleware);
middlewares.push(thunkMiddleware);
const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
