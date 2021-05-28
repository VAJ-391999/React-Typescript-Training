import * as actiontypes from '../../store/actions/actionType';
import axios from '../../axios-orders';


export const authStatrt = (): {type: string} => {
    return {
        type: actiontypes.AUTH_START
    };
};

export const authSuccess = (token: any, userId: any): {type: string, idToken: any, userId: any} => {
    return {
        type: actiontypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error: string): {type: string, error: string} => {
    return {
        type: actiontypes.AUTH_FAIL,
        error: error
    };
};


export const checkAuthTimeout = (expirationTime: any): {type: string, expirationTime: any } => {
    return {
        type: actiontypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
} 

export const logout = (): {type: string} => {
    //localStorage.removeItem('token');
    //localStorage.removeItem('expirationDate');
    //localStorage.removeItem('userId');
    return {
        type: actiontypes.AUTH_INITITAVE_LOGOUT
    }
};

export const logoutSucceed = (): {type: string} =>{
    return {
        type: actiontypes.AUTH_LOGOUT
    };
};

export const auth = (email: string, password: string, isSignup: boolean) => {
    return {
        type: actiontypes.AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup
    }
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actiontypes.SET_AUTH_REDIRECT_PATH,
        path : path
    }
}

export const authCheckState = (): {type: string} => {
    return {
        type: actiontypes.AUTH_CHECK_STATE
    }
};