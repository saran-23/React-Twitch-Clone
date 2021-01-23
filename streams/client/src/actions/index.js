
import streams from '../api/streams';
import history from '../history';     //my history file
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM ,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM 
} from './types';
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


export const  createStream = formValues =>  async (dispatch ,getState)=> {                     //redux-thunk
        const { userId } = getState().auth;
           const response =   await  streams.post('/streams',{...formValues,userId});                                                                 // post-Create '/streams -path to create the form values (title and description)
        dispatch({type:CREATE_STREAM,payload:response.data}); 

        history.push('/');      //programmatic navigation --forcing to go to the  homepage (automatic)
        };

export const  fetchStreams   =() => async dispatch => {                       //geting list of records
    const response = await streams.get('/streams');

    dispatch({type:FETCH_STREAMS,payload:response.data});
};
export const fetchStream  =(id) => async dispatch => {                    // geting a particular record by refering the id
    const response = await streams.get(`/streams/${id}`);

    dispatch ({type:FETCH_STREAM,payload:response.data})
};

export const editStream = (id,formValues) => async dispatch => {      //updating
    const response = await streams.patch(`/streams/${id}`,formValues);
    dispatch({type:EDIT_STREAM,payload:response.data});

    history.push('/');   // it will navigate automatially to homepage when form submitted

};
export const deleteStream = (id) => async dispatch => {   //destrory
    await streams.delete(`/streams/${id}`);
    dispatch({type:DELETE_STREAM, payload:id});
    
    history.push('/');   // it will navigate automatially to homepage when form submitted
};





























