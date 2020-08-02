import React from 'react';
import { setAuthentication, clearAuthentication } from '../api/localStorage';

let initialState = {
  isSignedIn: false,
  accessToken: null,
  expiresIn: null,
  expiresDate: null
};

export const AuthContext = React.createContext(initialState);

const authReducer = (state, action) => {
  console.log(action);
  const { payload } = action;

  switch (action.type) {
    case "LOGIN":
      console.log("AUTH - User login.");
      console.log(payload);
      setAuthentication(payload);
      return {
        ...state,
        isSignedIn: true,
        accessToken: payload.accessToken,
        expiresIn: payload.expiresIn,
        expiresDate: payload.expiresDate
      };
    case "LOGOUT":
      console.log("AUTH - User logout.");
      clearAuthentication();
      return {
        ...state,
        isSignedIn: false,
        accessToken: null,
        expiresIn: null,
        expiresDate: null
      };
    case "REFRESH":
      console.log("AUTH - Validate Token");
      return {
        ...state,
        isSignedIn: true,
        accessToken: payload.accessToken,
        expiresIn: payload.expiresIn,
        expiresDate: payload.expiresDate
      };
    default:
      return state;
  }
};

export const AuthStore = (props) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default { AuthContext, AuthStore };
