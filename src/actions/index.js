import firebase from 'firebase';

import {
   EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_ERROR,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_START
} from './types';


export const emailChanged = (text) => {
   //check if it is working
   // console.log(text);

   return {
      type: EMAIL_CHANGED,
      payload: text
   };
};

export const passwordChanged = (text) => {
   // console.log(text);

   return {
      type: PASSWORD_CHANGED,
      payload: text
   };
};

//PARAMETER HANYA SATU, LEBIH DARI SATU DIBUAT DALAM BENTUK OBJECT ({ bla, bla })
export const loginUser = ({ email, password }) => {
   return (dispatch) => {
      dispatch({
         type: LOGIN_USER_START
      });
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then((user) => loginUserSuccess(dispatch, user))
         .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
               .then((user) => loginUserSuccess(dispatch, user))
               .catch((error) => loginUserError(dispatch, error.message));
               });
   };    
};

const loginUserSuccess = (dispatch, user) => {
   // console.log('LOGIN SUCCESS');
   dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
   });
};

const loginUserError = (dispatch, message) => {
   // console.log('LOGIN FAILED');
   dispatch({
      type: LOGIN_USER_ERROR,
      payload: message
   });
};
