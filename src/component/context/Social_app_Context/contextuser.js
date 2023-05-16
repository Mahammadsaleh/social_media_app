import { createContext, useState, useReducer } from 'react';
export const Social_app_Context = createContext();

const initialState = {
  user: [],
  posts: [],
  comments: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
const Social_app_ContextProvider = ({ children }) => {
  const [mainUser, setmainUser] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Social_app_Context.Provider value={[mainUser, setmainUser]}>
      {children}
    </Social_app_Context.Provider>
  );
};

export default Social_app_ContextProvider;
