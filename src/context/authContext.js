import createContext from "./createContext";

import api from "../api";

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

const createUser = (dispatch) => {
  return async (nome, email, senha) => {
    try {
      await api.post("/criar", {
        nome: nome,
        email: email,
        senha: senha,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const { Context, Provider } = createContext(
  reducer,
  { teste, createUser },
  initialState,
);
