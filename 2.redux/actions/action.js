//action
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = (data) => {
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

module.exports = {
  logIn,
  logOut,
  addPost,
};
