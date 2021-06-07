import React, { FC, ReactElement, MouseEventHandler } from 'react';
import './Input.css';
import TextField from '@material-ui/core/TextField';

interface LoginForm {
    key?: string,
    name?:string,
    children?: any,
    elementType?: string,
    elementConfig?: any,
    value?: string,
    touched?: boolean,
    changed?: any,
    placeholder?: string

}

const Input = (props: LoginForm) => {
    //console.log(props.name)
    return (
        <>
            <div className="Input">
            <label className="mylabel">{props.name}</label><br />
            <TextField
                id="filled-basic"
                name={props.elementType}
                variant="filled"
                label={props.placeholder}
                value={props.value}
                onChange={props.changed}
                 /><br />
              
            </div>
        </>
    );
};

export default Input;