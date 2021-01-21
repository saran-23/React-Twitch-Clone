import {SIGN_IN , SIGN_OUT } from '../actions/types';
const INITIAL_STATE = {
    isSignedIn:null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case SIGN_IN:    //variable
                return{...state,isSignedIn:true,};

        case  SIGN_OUT:     // variable 
                return {...state,isSignedIn:false};
        default: 
        return state;
    }
};