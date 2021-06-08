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
| {type: 'SET_AUTH'}

const authreducer = (state: IAuth, action: ACTIONTYPE): IAuth => {
    switch(action.type){
        case 'SET_AUTH':
            debugger
            console.log("auth", state.authenticate)
            return {...state, authenticate: true}
        default:
            return state
    }
}


export const authenticate: boolean = false;

export const AuthenticationContext = createContext<{authenticate: boolean, dispatch: any}>({authenticate: false, dispatch: () =>  null});

export const AuthContext = () => {

    const [authvalue, dispatch] = useReducer(authreducer, auth)

    return (
        <AuthenticationContext.Provider value={{authenticate, dispatch}}>
            <App />
        </AuthenticationContext.Provider>
    )
};

export default AuthContext;