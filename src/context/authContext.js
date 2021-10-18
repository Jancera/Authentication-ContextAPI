import createContext from "./createContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../api";

const initialState = {
  loginError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loginError":
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};

const setLoginError = (dispatch) => {
  return (boolean) => {
    dispatch({ type: "loginError", payload: boolean });
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
      dispatch({ type: "loginError", payload: true });
    }
  };
};

const loginUser = (dispatch) => {
  return async (email, senha) => {
    try {
      const data = await api.post("/login", {
        email: email,
        senha: senha,
      });

      await AsyncStorage.setItem("token", data.data.token);
    } catch (e) {
      dispatch({ type: "loginError", payload: true });
    }
  };
};

export const { Context, Provider } = createContext(
  reducer,
  { setLoginError, createUser, loginUser },
  initialState,
);
