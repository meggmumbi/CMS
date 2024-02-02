import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode'

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...(
        // if payload (user) is provided, then is authenticated
        user
          ? ({
            isAuthenticated: true,
            isLoading: false,
            user
          })
          : ({
            isLoading: false
          })
      )
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  }
};

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;

    try {
      isAuthenticated = window.sessionStorage.getItem('authenticated') === 'true';
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const user = {
        id: '5e86809283e28b96d2d38537',
        avatar: '/assets/avatars/avatar-anika-visser.png',
        name: 'Anika Visser',
        email: 'anika.visser@devias.io'
      };

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const skip = () => {
    try {
      window.sessionStorage.setItem('authenticated', 'true');
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'Anika Visser',
      email: 'anika.visser@devias.io'
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  };

  const signIn = async (userName, password) => {
    try {
      // Make a POST request to the authentication endpoint
      const response = await axios.post('https://localhost:7199/Authenticate/login', {
        userName,
        password
      });

      // Check if the authentication was successful
      if (response.data.isSuccess) {
        // Save the authentication token to sessionStorage or cookies
        try {
          window.sessionStorage.setItem('authenticated', 'true');
          window.sessionStorage.setItem('token', response.data.response);
        } catch (err) {
          console.error(err);
        }

        //Extract user information from the token (You may need a library like jwt-decode)
        const decodedToken = jwt.decode(response.data.response);
        const decodedjwtToken = jwtDecode(response.data.response);
        
        // const user = {
        //   id: decodedToken.id,
        //   avatar: decodedToken.avatar,
        //   name: decodedToken.name,
        //   email: decodedToken.email
        // };

    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: decodedjwtToken.name,
      email: decodedjwtToken.emailaddress
    };
    console.log("decoded token", decodedjwtToken);

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  } else {
    throw new Error('Authentication failed');
  }
} catch (err) {
  // Handle authentication failure
  console.error(err);
  throw new Error('Authentication failed');
}
};

  const signUp = async (email, UserName, password) => {
    try {
      const response = await axios.post('https://localhost:7199/Authenticate/register', {
        email,
        UserName,
        password
      });

      // Check if registration was successful
      if (response.data.isSuccess) {
        // Save the authentication token to sessionStorage or cookies
        try {
          window.sessionStorage.setItem('authenticated', 'true');
          window.sessionStorage.setItem('token', response.data.response);
        } catch (err) {
          console.error(err);
        }

        // Use jsonwebtoken to extract user information from the token
        const decodedToken = jwt.decode(response.data.response);

       
          // Create the user object with the extracted information
          const user = {
            // id: decodedToken.id,
            // avatar: decodedToken.avatar,
            name: decodedToken.name,
            email: decodedToken.email
          };

          // Dispatch the SIGN_IN action with the user information
          dispatch({
            type: HANDLERS.SIGN_IN,
            payload: user
          });
       
      } else {
        throw new Error('Registration failed',response.data.errors[0].message);
      }
    } catch (err) {
      // Handle registration failure
      console.error(err);
      throw new Error('Registration failed', err.message);
    }  
  };

  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
