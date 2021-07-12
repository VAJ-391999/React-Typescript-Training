
import React, { useState } from 'react';
import { useHistory , NavLink, Link} from 'react-router-dom';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import './Login.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from '../Redux/actions/auth';


const Login = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const myState = useSelector((state: any) => {
        return state.auth
    })
    console.log("Login",myState.isAuthentication, myState.currentUserName)

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const [loginMsg, setLoginMsg] = useState({ msg: "" })

    const loginFormSubmit = (event: any) => {
        event.preventDefault();

        axios.post('http://localhost:4001/app/login', loginDetails, { withCredentials: true })
            .then(res => {
                console.log("After post", res.data)
                setLoginMsg({ ...loginMsg, msg: res.data.msg })

                if (res.data.auth) {
                    if(res.data.useremail) {
                        dispatch(authAction.isAuth(true))
                        dispatch(authAction.currentUser(res.data.useremail.fullName))
                        history.replace('/dashboard')
                    }
                    else{
                        history.replace('/signup')
                    }
                }
                else{
                    history.replace('/login')
                }
            })
    }


    return (
        <div className="Login">
            <form className="loginform">
                <h1>Login Form</h1>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={loginDetails.email}
                        onChange={(event) => setLoginDetails({ ...loginDetails, email: event.target.value })}
                        type="text" />
                </FormControl><br />

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={loginDetails.password}
                        onChange={(event) => setLoginDetails({ ...loginDetails, password: event.target.value })}
                        type="password" /><br />
                </FormControl><br />
                <div className="Msg-div">
                    {loginMsg.msg}
                </div>
                <h4><NavLink to="/">Forget Password ?</NavLink></h4>
                <Button variant="contained" type="submit" onClick={(event) => loginFormSubmit(event)}>Login</Button>
                <h3>Don't have account ? <NavLink to="/signup">Sign Up</NavLink></h3>
                <h4><span><NavLink to="/">Go Back to Home</NavLink></span></h4>
            </form>
        </div>
    );
};

export default Login;