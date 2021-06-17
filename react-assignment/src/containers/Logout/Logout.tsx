import React, { useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import AuthContext, {AuthenticationContext} from '../../containers/MyInfo/Context/Authcontext';

const Logout = () => {
    const {authvalue, dispatch} = useContext(AuthenticationContext);
    //debugger
    console.log("Logout page")
    console.log(authvalue.authenticate)
    const onLogout = () => dispatch({type: 'AUTH_LOGOUT'})
   
    useEffect(() => {
        onLogout()
    }, [onLogout])

    return (
        <h1>Hi</h1>
    )
};

/*const Logout = () => {

    const {authvalue, dispatch} = useContext(AuthenticationContext);
    console.log("before",authvalue.authenticate)
   const history = useHistory();
   const onLogout = () => dispatch({type: 'AUTH_LOGOUT'})
    useEffect(() => {
        console.log("useeffect")
        onLogout();
    }, [])

    return (<Redirect to="/" />)
}*/
export default Logout;