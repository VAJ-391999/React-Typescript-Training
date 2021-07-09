import * as actiontype from '../actions/actionType';

interface IAUTH {
    isAuthentication: boolean,
    currentUserName: string | null
}

const initialState: IAUTH = {
    isAuthentication: false,
    currentUserName: null
}

type ACTIONTYPE = 
| {type: 'IS_AUTH', authPayload: boolean}
| {type: 'SET_CURRENT_USER', userPayload: string}

const authreducer = (state=initialState, action: ACTIONTYPE) => {
    switch(action.type) {
        case actiontype.IS_AUTH:
            return {...state, isAuthentication: action.authPayload};

        case actiontype.SET_CURRENT_USER:
            return {...state, currentUserName: action.userPayload};

        default:
            return state;
    }
}

export default authreducer;