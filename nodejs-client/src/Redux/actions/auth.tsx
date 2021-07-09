import * as actiontype from  './actionType';

export const isAuth = (authPayload: boolean) => {
    return {
        type : actiontype.IS_AUTH,
        authPayload : authPayload
    }
}

export const currentUser = (userPayload: string) => {
    return {
        type: actiontype.SET_CURRENT_USER,
        userPayload: userPayload
    }
}