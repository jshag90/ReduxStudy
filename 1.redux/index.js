const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});
console.log("1st", store.getState());

//action
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());
