import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  API_URI,
  REG_LOADING,
  LOG_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  UPDATE_TRANSACTIONS
} from './types';
import {CLEAR_ERRORS} from './types';
import {returnErrors} from './errActions';

export const register = (newUser) => async (dispatch) => {
  console.log(newUser);
  dispatch({type: REG_LOADING});

  const data = JSON.stringify(newUser);

  await axios({
    method: 'POST',
    url: `${API_URI}/api/users`,
    data,
    headers: {
      'Content-Type': 'application/json'

    }
  }).then(res => {
    const {token} = res.data;
    AsyncStorage.setItem('@token', token);
    dispatch({type: CLEAR_ERRORS});
    dispatch({type: REGISTER_SUCCESS, payload: res.data});
  })
  .catch(err => {
    dispatch({type: REGISTER_FAIL})
    dispatch(

      returnErrors(err.response.data.msg, err.response.status, 'REGISTER_FAIL',
      ),
    );
  })
};

// Login user
export const login = ({email, password}) => async (dispatch) => {
  dispatch({type: LOG_LOADING});
  console.log(email);
  console.log(password);
  //make request to login
  const data = JSON.stringify({email, password});

  await axios({
    method: 'POST',
    url: `${API_URI}/api/auth`,
    data,
    headers: {'Content-Type': 'application/json' }
  }).then(res => {
    const {token} = res.data;
    AsyncStorage.setItem('@token', token);
    dispatch({type: CLEAR_ERRORS});
    dispatch({type: LOGIN_SUCCESS, payload: res.data});
  })
  .catch(err => {
    dispatch({type: LOGIN_FAIL})
    dispatch(returnErrors('Custom Error', 400, 'LOGIN_FAIL'))
  })



  

}

//** Amazon Load User */
export const loadUser = () => async (dispatch) => {
  dispatch({type: LOG_LOADING});

  const token = await AsyncStorage.getItem('@token');
  // await AsyncStorage.removeItem('@token');

  await axios({
    method: 'GET',
    url: `${API_URI}/api/auth/user`,
    headers: {
      'Content-Type': 'application/json',
      'x-barter-token': token,
    },
  })
    .then((res) => {
      dispatch({type: USER_LOADED, payload: res.data});
    })
    .catch((err) => {
      dispatch({type: AUTH_ERROR});
      AsyncStorage.removeItem('@token');
    });


    
};



export const transactions = ( email) => async (dispatch, getState) => {
  //const {account_number} = data;
  //const {payload} = getState().auth;
  //const sender = payload.user.email;
  //console.log(account_number);

  // I need to use axios here

  const number = { account_number: '70506186133'};

   await axios.post('127.0.0.1:5000/transactions', number)
    .then((res) => {
      //dispatch({type: USER_LOADED, payload: res.data});
      console.log(res.data);
      dispatch({type: USER_LOADED, payload: res.data});
    })
    .catch((err) => {
      //dispatch({type: AUTH_ERROR});
      //AsyncStorage.removeItem('@token');
    });

}