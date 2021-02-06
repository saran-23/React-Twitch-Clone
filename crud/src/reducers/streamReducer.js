import _ from 'lodash';
import {
    FETCH_RECORD ,
    FETCH_RECORDS,
    DELETE_RECORD,
    EDIT_RECORD, 
    CREATE_RECORD
} from'../actions/types';

//object aproach wit new es2015 syntax
export default (state = {},action ) => {
    switch(action.type) {                                                              //telling that streamed id is equal to payloadID
        case FETCH_RECORDS: 
        return {...state,  ..._.mapKeys(action.payload, 'id')};
        case FETCH_RECORD:
            return {...state,[action.payload.id]: action.payload};
        case CREATE_RECORD:
            return {...state,[action.payload.id]:action.payload};
            case EDIT_RECORD:
                return {...state,[action.payload.id]: action.payload} ;
             case DELETE_RECORD:
                 return  _.omit(state,action.payload) ;
                default:
                    return state;
    }
};

