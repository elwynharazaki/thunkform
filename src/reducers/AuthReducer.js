import {
   EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_ERROR,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_START
} from './../actions/types';

const INITIAL_STATE = {
   email: '',
   password: '',
   loading: false,
   error: '',
   user: null
};

export default (state = INITIAL_STATE, action) => {
   console.log(action);

   switch (action.type) {
      case EMAIL_CHANGED:
         //...state use to copying old state
         return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
         return { ...state, password: action.payload };
      case LOGIN_USER_ERROR:
         return { ...state, error: action.payload, password: '', loading: false };
      case LOGIN_USER_SUCCESS:
         return { ...INITIAL_STATE, user: action.payload };
      case LOGIN_USER_START:
         return { ...state, loading: true };
      default:
         return state;
   }
};
