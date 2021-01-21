import { formValues } from 'redux-form';
import streams from '../api/streams';
import {SIGN_IN,SIGN_OUT} from './types';
export const  signIn = (userId)  =>  {
    return {
        type:SIGN_IN,
        payload:userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    
    };
};


export const CreateStream = (formValues) =>  async (dispatch) => {                     //redux-thunk
            streams.post('/streams',formValues) ;                                                                 // post-Create '/streams -path to create the form values (title and description)
    };

