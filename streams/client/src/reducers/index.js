import {combineReducers} from 'redux';
import  {reducer as formReducer} from 'redux-form';
import authReducer from './AuthReducers';
import streamReducer from './streamReducer';

export default  combineReducers({
    auth:authReducer,
    form: formReducer,
    stream:streamReducer,
});