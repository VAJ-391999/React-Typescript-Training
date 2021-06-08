import React, { FC, ReactElement, useContext, useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '@material-ui/core/Button';
import './Login.css';
import { Link, Redirect, Route, RouteComponentProps } from 'react-router-dom';
import SignUp from '../SignUpForm/SignUp';
import { useHistory } from 'react-router-dom';
import AuthContext, { AuthenticationContext } from '../../containers/MyInfo/Context/Authcontext';
import { checkValidity } from '../../shared/utility';
import axios from 'axios';
import Home from '../../containers/Home/Home';



const Login = () => {

    const[formInfo, setFormInfo] = useState<any>({
        username: {
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
                minLength: 6
              },
              valid: false,
            touched: false
        }
    });

    const[signIn, setSignIn] = useState<boolean>(false);
    const {authenticate, dispatch} = useContext(AuthenticationContext)
    const history = useHistory();

    const changeHandler = (e: any, inputIdentifier: string) => {
        const updaedLoginForm = {
            ...formInfo, 
        }

        setFormInfo((pre: any) => ({
            ...pre,
            [inputIdentifier]: {
                                ...formInfo,
                                value: e.target.value,
                                valid: checkValidity(e.target.value, formInfo[inputIdentifier].validation ),
                                touched: true}
        }))
        
    }

    const formElementArrary: any[] = [];
    let key: keyof typeof formInfo;
    for ( key in formInfo){
        formElementArrary.push({
            id: key,
            config: formInfo[key],
        })
        //console.log(key)
    }

    //console.log("formElementarray",formElementArrary)

    

   let form = formElementArrary.map(formEl => {
      // console.log("formel",formEl.config.elementConfig)
        return <Input 
            key={formEl.id}
            name={formEl.id}
            elementType={formEl.config.elementType}
            type={formEl.config.type}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            invalid={!formEl.config.valid}
            touched={formEl.config.touched}
            changed={(event: any) => changeHandler(event, formEl.id)}
        />
    })

    

    const loginHandler = () =>{
        if(formInfo.username.valid === true && formInfo.password.valid === true) {
             axios.get('https://react-assignment-e4aa2-default-rtdb.firebaseio.com/test.json')
            .then(response => {
                //console.log("response data",response.data)
                const fetchResults: any = [];

                for (let key in response.data){
                    
                    fetchResults.push({
                        ...response.data[key],
                        id: key
                    })
                }
                //console.log("fetchdata", fetchResults)
                console.log(fetchResults.map((user: any,index: any) => {
                   if (user.Uemail === formInfo.username.value && user.Upassword === formInfo.password.value){
                       //debugger
                       dispatch({type: 'SET_AUTH'})
                        setSignIn(true);
                        history.replace('/home');
                   }
                }))
                //setLoginResults(fetchResults);
                //console.log("logindata",loginResults, typeof loginResults)
            });
           
        }else {
            
        }
        
        
    }

    let content = (
        <>
        {form}
         <a href="#">Forget Password?</a>
         <Button variant="contained" className="LoginButton" onClick={() => loginHandler()} >LOGIN</Button>
         <p>Don't have Account? <Link to='/signup'>Sign Up</Link></p>
         <Route path='/signup' component={SignUp} />
         </>
    );

   

    return (
        <div className="Login">
            <div className="LoginForm">
                {content}
            </div>
        </div>
    );
};


export default Login;