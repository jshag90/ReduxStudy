const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

// const nextState = {
//   ...initialState,
//   posts: [action.data],
// };

// const nextState = {
//   ...initialState,
//   posts: [...initialState.posts, action.data],
// };

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});
console.log("1st", store.getState());

//action
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logout = (data) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

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

store.dispatch(logout());

console.log("5th", store.getState());
