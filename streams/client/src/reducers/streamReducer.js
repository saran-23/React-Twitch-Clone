import _ from 'lodash';
import {
    FETCH_STREAM ,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM, 
    CREATE_STREAM
} from'../actions/types';

//object aproach wit new es2015 syntax
export default (state = {},action ) => {
    switch(action.type) {                                                              //telling that streamed id is equal to payloadID
        case FETCH_STREAMS: 
        return {...state,  ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            return {...state,[action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload};
            case EDIT_STREAM:
                return {...state,[action.payload.id]: action.payload} ;
             case DELETE_STREAM:
                 return  _.omit(state,action.payload) ;;  
                default:
                    return state;
    }
};

