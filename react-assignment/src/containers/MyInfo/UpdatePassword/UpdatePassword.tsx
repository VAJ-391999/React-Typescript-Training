import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './UpdatePassword.css';
import Input from '../../../components/UI/Input/Input';
import { checkValidity } from '../../../shared/utility';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import AuthContext, { AuthenticationContext } from '../Context/Authcontext';

const UpdatePassword = () => {

    const [updateFormInfo, setUpdateFormInfo] = useState<any>({
        name: {
            elementType: 'input',
            elementConfig: {
                placeholder: ' Enter name'

            },
            type: 'text',
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

    const changeHandler = (e: any, inputIdentifier: string) => {
        const updaedLoginForm = {
            ...updateFormInfo,
        }

        setUpdateFormInfo((pre: any) => ({
            ...pre,
            [inputIdentifier]: {
                ...updateFormInfo,
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

    const { authvalue, dispatch } = useContext(AuthenticationContext);

    const updateHandler = () => {
        if(updateFormInfo.name.valid && updateFormInfo.oldpassword.valid && updateFormInfo.newpassword.valid){
            if (updateFormInfo.oldpassword.value === updateFormInfo.newpassword.value) {
                dispatch({type: 'AUTH_LOGOUT'})
                history.replace('/');
            }
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