import createContext from "./createContext";

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const teste = (dispatch) => {
  return (args) => {
    console.log(args);
  };
};

export const { Context, Provider } = createContext(
  reducer,
  { teste },
  initialState
);
