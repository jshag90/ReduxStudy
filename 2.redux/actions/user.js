//action
const logIn = (data) => {
  //async aciton creator
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "seonhak",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (data) => {
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};

// const logIn = (data) => {
//sync action creator
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };

const logOut = (data) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

module.exports = {
  logIn,
  logOut,
};
