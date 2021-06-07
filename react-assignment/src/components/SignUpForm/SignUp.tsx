import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '@material-ui/core/Button';
import { Link, Route, Redirect } from 'react-router-dom';
import '../LoginForm/Login.css';
import TextField from '@material-ui/core/TextField';


const SignUp = () => {

    const [signUp, setSignUp] = useState<boolean>(false);

    const signupHandler = () => {
        console.log("Signup Handler");
        setSignUp(true);
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                {signUp && <Redirect to="/" />}
                <Input name="Name"  placeholder="Enter your Name"/>
                <Input name="Email"  placeholder="Enter your Email"/>
                <Input name="Password"  placeholder="Enter your Password"/>
                
                <Button variant="contained" className="LoginButton" onClick={() => signupHandler()} >SIGNUP</Button>
            </div>
        </div>
    );
}

export default SignUp;