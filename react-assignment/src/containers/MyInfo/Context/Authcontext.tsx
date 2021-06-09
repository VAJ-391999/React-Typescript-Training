import React, { createContext, useReducer } from 'react';
import App from '../../../App';
import Login from '../../../components/LoginForm/Login';

interface IAuth {
    authenticate:  boolean
}

let auth: IAuth = {
    authenticate: false
}

type ACTIONTYPE =
| {type: 'AUTH_SUCCESS'}
| {type: 'AUTH_LOGOUT'}

const authreducer = (state: IAuth, action: ACTIONTYPE): IAuth => {
    switch(action.type){
        case 'AUTH_SUCCESS':
            //debugger
            console.log("auth success", state.authenticate)
            return {...state, authenticate: true}
        case 'AUTH_LOGOUT':
            console.log("Auth logout", state.authenticate)
            return {...state, authenticate: false}
        default:
            return state
    }
}

console.log("test")

//export const authenticate: boolean = false;

export const AuthenticationContext = createContext<{authvalue: IAuth, dispatch: any}>({authvalue: auth, dispatch: () =>  auth});

export const AuthContext = () => {

    const [authvalue, dispatch] = useReducer(authreducer, auth)

    return (
        <AuthenticationContext.Provider value={{authvalue, dispatch}}>
            <App />
        </AuthenticationContext.Provider>
    )
};

export default AuthContext;