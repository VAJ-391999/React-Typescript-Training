import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './UpdatePassword.css';
import Input from '../../../components/UI/Input/Input';
import { checkValidity } from '../../../shared/utility';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import AuthContext, { AuthenticationContext } from '../Context/Authcontext';
import axios from 'axios';
import results from '../../../components/UI/AxiosUrl/results';

const UpdatePassword = () => {

    const [updateFormInfo, setUpdateFormInfo] = useState<any>({
        email: {
            elementType: 'input',
            elementConfig: {
                placeholder: ' Enter name'

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
        oldpassword: {
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
        },
        newpassword: {
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

    const history = useHistory();
   useEffect(() => {
    console.log("password",updateFormInfo["password"].validation)
   }, [])

    const changeHandler = (e: any, inputIdentifier: string) => {
        const updaedLoginForm = {
            ...updateFormInfo,
        }

        setUpdateFormInfo((pre: any) => ({
            ...pre,
            [inputIdentifier]: {
                ...updateFormInfo[inputIdentifier],
                value: e.target.value,
                valid: checkValidity(e.target.value, updateFormInfo[inputIdentifier].validation),
                touched: true
            }
        }))

    }

    const formElementArrary: any[] = [];
    let key: keyof typeof updateFormInfo;
    for (key in updateFormInfo) {
        formElementArrary.push({
            id: key,
            config: updateFormInfo[key],
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

    type UpdatePass = {
        Uname : string,
        Uemail: string,
        Upassword: string,
        UsignupDate: string
    }

    

    const { authvalue, dispatch } = useContext(AuthenticationContext);
    //axios.get('https://react-assignment-e4aa2-default-rtdb.firebaseio.com/test.json/-McTgak7OLKONkjeFHTp')
                            //.then(resp => console.log("keydata",resp.data));

    const updateHandler = () => {
        if(updateFormInfo.email.valid && updateFormInfo.oldpassword.valid && updateFormInfo.newpassword.valid){
            axios.get('https://react-assignment-e4aa2-default-rtdb.firebaseio.com/test.json')
            .then(res => {
                let employeeDetails: any = [];

                for(let key in res.data) {
                    employeeDetails.push({
                        ...res.data[key],
                        id: key
                    })
                }

                

                employeeDetails.map((emp: any, index: any) => {
                    if (emp.Uemail === updateFormInfo.email.value) {
                        if (updateFormInfo.oldpassword.value === updateFormInfo.newpassword.value) {

                            const UpdateData: UpdatePass = {
                                Uname : emp.Uname,
                                Uemail: emp.Uemail,
                                Upassword: updateFormInfo.newpassword.value,
                                UsignupDate: emp.UsignupDate
                            }
                            /*axios.get('https://react-assignment-e4aa2-default-rtdb.firebaseio.com/test/-McTgak7OLKONkjeFHTp')
                            .then(resp => console.log(resp.data));*/


                            axios.put(`https://react-assignment-e4aa2-default-rtdb.firebaseio.com/test/${emp.id}.json`,UpdateData)

                            dispatch({type: 'AUTH_LOGOUT'})
                            history.replace('/');
                        }
                    }
                })

            })
            
        }
      
    }


    return (
        <div className="UpdateForm">
            <div className="UpdateContent">
                {form}
                <Button variant="contained" className="UpdateButton" onClick={updateHandler}>UPDATE PASSWORD</Button>
            </div>
        </div>
    );
};

export default UpdatePassword;