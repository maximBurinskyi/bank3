import axios from 'axios';
import IO from 'socket.io-client';
import {API_URI, UPDATE_AMOUNT, UPDATE_BALANCE} from './types';

//** Socket Config */
export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

export const roomID = 'k328wfiuqwhefjashufasfhaysdfu';
//export const roomID = 1;

socket.on("connection", () => console.log('Connection'));

export const send = ({amount, account, purpose}) => async (dispatch, getState) => {
  //GEt current user details
  const { payload} = getState().auth;
  //console.log(user.account_balance);
  console.log(payload);
  //console.log(user.account_balance);

  // if(user.account_balance < amount) {
  //   return alert('Sorry you dont have enough balance');
  // }
  

  //Construct send data
  const data = {
    amount, 
    account_number: account,
    purpose,
    sender: payload.user.email,
    roomID
  };

  //Emit the data
  socket.emit("send", data);

  //Update account balance
  const currentUserAmount = payload.user.account_balance - amount;
  console.log(currentUserAmount);
  // console.log(user.account_balance);
  console.log(amount);
  dispatch({type: UPDATE_AMOUNT, payload: currentUserAmount});
};


export const request = ({amount, account, purpose}) => (dispatch, getState) => {
const {payload} = getState().auth;

const data = {
  amount,
  account_number: account,
  purpose,
  sender: payload.user.email,
  roomID
};

socket.emit("request", data);

const currentUserAmount = payload.user.account_balance + amount;
dispatch({type: UPDATE_AMOUNT, payload: currentUserAmount});


};

export const receiver = () => async (dispatch, getState) => {
  const {payload} = getState().auth;
  console.log(payload);


  //console.log(user);

  socket.on('moneySent', (data) => {
    if (payload.user.email === data.receiver) {
      dispatch({
        type: 'UPDATE_BALANCE',
       payload: payload.user.account_balance + data.amount,
      });
      alert('You have received money')
    }
  })
};