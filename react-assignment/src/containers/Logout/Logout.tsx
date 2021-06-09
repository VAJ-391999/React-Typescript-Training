import React, { useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import AuthContext, {AuthenticationContext} from '../../containers/MyInfo/Context/Authcontext';

const Logout = () => {
    const {authvalue, dispatch} = useContext(AuthenticationContext);
    console.log("Logout page")
    console.log(authvalue.authenticate)
    const onLogout = () => dispatch({type: 'AUTH_LOGOUT'})
    const history = useHistory();
    useEffect(() => {
        onLogout()
        history.replace("/");
    }, [onLogout])

    return <Redirect to="/" />
};

export default Logout;