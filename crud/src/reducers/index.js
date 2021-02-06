import {combineReducers} from 'redux';
import  {reducer as formReducer} from 'redux-form';
import authReducer from './AuthReducers';
import recordReducer from './streamReducer';

export default  combineReducers({
    auth:authReducer,
    form: formReducer,
    record:recordReducer,
});