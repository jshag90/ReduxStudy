const { createSlice } = require("@reduxjs/toolkit");
const { DRAFT_STATE } = require("immer/dist/internal");
const { logIn } = require("../actions/user");

const initialState = {
  isLoggingIn: true,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case "LOG_IN_SUCCESS":
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case "LOG_IN_FAILURE":
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case "LOG_OUT":
        draft.data = null;
        break;
      default:
        break;
    }
  });

  // // 새로운 state 만들어주기
  // switch (action.type) {
  //   case "LOG_IN":
  //     return {
  //       ...prevState,
  //       data: action.data,
  //     };
  //   case "LOG_OUT":
  //     return {
  //       ...prevState,
  //       data: null,
  //     };
  //   default:
  //     return prevState;
  // }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [logIn.pending](state, action) {
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) {
      state.data = null;
      state.isLoggingIn = false;
    },
  },
});

module.exports = userReducer;
