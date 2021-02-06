
import record from '../api/records';
import history from '../history';     //my history file
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_RECORD,
    FETCH_RECORD ,
    FETCH_RECORDS,
    DELETE_RECORD,
    EDIT_RECORD
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


export const  createRecord = formValues =>  async (dispatch ,getState)=> {                     //redux-thunk
        const { userId } = getState().auth;
           const response =   await  record.post('/record',{...formValues,userId});                                                                 // post-Create '/record -path to create the form values (title and description)
        dispatch({type:CREATE_RECORD,payload:response.data}); 

        history.push('/');      //programmatic navigation --forcing to go to the  homepage (automatic)
        };

export const  fetchRecords  =() => async dispatch => {                       //geting list of records
    const response = await record.get('/record');

    dispatch({type:FETCH_RECORDS,payload:response.data});
};
export const fetchRecord =(id) => async dispatch => {                    // geting a particular record by refering the id
    const response = await record.get(`/record/${id}`);
    dispatch ({type:FETCH_RECORD,payload:response.data})
};

export const editRecord = (id,formValues) => async dispatch => {      //updating
    const response = await record.patch(`/record/${id}`,formValues);
    dispatch({type:EDIT_RECORD,payload:response.data});

    history.push('/');   // it will navigate automatially to homepage when form submitted

};
export const deleteRecord= (id) => async dispatch => {   //destrory
    await record.delete(`/record/${id}`);
    dispatch({type:DELETE_RECORD, payload:id});

    history.push('/');   // it will navigate automatially to homepage when form submitted
};
