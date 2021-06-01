import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import Button from '@material-ui/core/Button';
import { Link, Route, Redirect } from 'react-router-dom';
import '../LoginForm/Login.css';



const SignUp = () => {

    const[signUp, setSignUp] = useState<boolean>(false);

    const signupHandler = () => {
        console.log("Signup Handler");
        setSignUp(true);
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                {signUp && <Redirect to="/"/>}
                <Input name="Name" placeholder="Enter Your Name" /> 
                <Input name="Email" placeholder="Enter Your Email" />
                <Input name="Password" placeholder="Enter Your Passsword" />
               <Button variant="contained" className="LoginButton" onClick={() => signupHandler()} >SIGNUP</Button>
            </div>
        </div>
    );
}

export default SignUp;