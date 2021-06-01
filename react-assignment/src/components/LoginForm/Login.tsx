import React, { FC, ReactElement, useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '@material-ui/core/Button';
import './Login.css';
import { updateOject } from '../../shared/utility';
import { Link, Redirect, Route, RouteComponentProps } from 'react-router-dom';
import SignUp from '../SignUpForm/SignUp';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import { useHistory } from 'react-router-dom';



const Login = () => {

    const[formInfo, setFormInfo] = useState({
        username: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Enter Email'

            },
            value: '',
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: ' Enter password'

            },
            value: '',
            touched: false
        }
    });

    const[signIn, setSignIn] = useState<boolean>(false)

    const history = useHistory();

  /* const inputChangeHandler = (event: any, formName: string) => {
        //alert('you have logged in');

    }

    const formElementArrary: any[] = [];
    let key: keyof typeof formInfo;
    for ( key in formInfo){
        formElementArrary.push({
            id: key,
            config: formInfo[key],
        })
        console.log(key)
    }

    console.log(formElementArrary.length)

    

    let form = formElementArrary.map(formEl => {
        return <Input 
            key={formEl.id}
            name={formEl.id}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            touched={formEl.config.touched}
            changed={(event) => inputChangeHandler(event, formEl.id)}
        />
    })*/

    const loginHandler = () =>{
        setSignIn(true);
        history.replace('/home');
    }

    let content = (
        <>
        <Input name="Username" placeholder="Enter Your Username" />
        <Input name="Password" placeholder="Enter Your Passsword" />
         <a href="#">Forget Password?</a>
         <Button variant="contained" className="LoginButton" onClick={() => loginHandler()} >LOGIN</Button>
         <p>Don't have Account? <Link to='/signup'>Sign Up</Link></p>
         <Route path='/signup' component={SignUp} />
         </>
    );

   if(signIn) {
    content = (
        <Home />
    )

   }
    

    return (
        <div className="Login">
            <div className="LoginForm">
                {content}
            </div>
        </div>
    );
};


export default Login;