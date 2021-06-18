import React, { useState, useEffect } from 'react';
import Input from '../UI/Input/Input';
import Button from '@material-ui/core/Button';
import { Link, Route, Redirect } from 'react-router-dom';
import '../LoginForm/Login.css';
import { checkValidity } from '../../shared/utility';
import axios from 'axios';
import results from '../UI/AxiosUrl/results';
/** https://react-assignment-e4aa2-default-rtdb.firebaseio.com/ */

const SignUp = () => {

    const[formInfo, setFormInfo] = useState<any>({
        name: {
            elementType: 'input',
            elementConfig: {
               
                placeholder: ' Enter Name'

            },
            type: 'text',
            value: '',
            validation: {
                required: true,
                minLength: 6,
              },
              valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                
                placeholder: ' Enter Email'

            },
            type: 'email',
            value: '',
            validation: {
                required: true,
                isEmail: true,
              },
              valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                
                placeholder: ' Enter password'

            },
            type: 'password',
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 24
              },
              valid: false,
            touched: false
        }
    });

    const [signUp, setSignUp] = useState<boolean>(false);
    useEffect(() => {
        console.log("password",formInfo["password"].validation)
       }, [])

    type ISignUp = {
        Uname : string,
        Uemail: string,
        Upassword: string,
        UsignupDate: string
    }

    const SignUpData: ISignUp = {
        Uname : formInfo.name.value,
        Uemail: formInfo.email.value,
        Upassword: formInfo.password.value,
        UsignupDate: new Date().toDateString()
    }

    const signupHandler = () => {
        if (formInfo.name.valid === true && formInfo.email.valid === true && formInfo.password.valid === true) {
            console.log("Signup Handler");
            results.post('/test.json', SignUpData);
            setSignUp(true);
        } 
    }

    const changeHandler = (e: any, inputIdentifier: string) => {
        console.log(e.target.value);
        const updaedLoginForm = {
            ...formInfo, 
        }

        setFormInfo((pre: any) => ({
            ...pre,
            [inputIdentifier]: {
                                ...formInfo[inputIdentifier],
                                value: e.target.value,
                                valid: checkValidity(e.target.value, formInfo[inputIdentifier].validation ),
                                touched: true}
        }))
        //console.log("updated login form", updaedLoginForm.name.value )
        
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

    console.log(formElementArrary)

    

   let form = formElementArrary.map(formEl => {
        return <Input 
            key={formEl.id}
            name={formEl.id}
            type={formEl.config.type}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            touched={formEl.config.touched}
            invalid={!formEl.config.valid}
            changed={(event: any) => changeHandler(event, formEl.id)}
        />
    })

    return (
        <div className="Login">
            <div className="LoginForm">
                {signUp && <Redirect to="/" />}
                {form}
                
                <Button variant="contained" className="LoginButton" onClick={() => signupHandler()} >SIGNUP</Button>
            </div>
        </div>
    );
}

export default SignUp;