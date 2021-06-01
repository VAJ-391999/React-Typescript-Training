import React, { FC, ReactElement, MouseEventHandler } from 'react';
import './Input.css';

interface LoginForm {
    key: string,
    name:string,
    children?: any,
    elementType: string,
    elementConfig: any,
    value: string,
    touched: boolean,
    changed: MouseEventHandler

}

const Input = ({name, placeholder}: {name:string, placeholder: string}) => {
    //console.log(props.name)
    return (
        <>
            <div className="Input">
               <label>{name}</label>
                <input placeholder={placeholder} />
              
            </div>
        </>
    );
};

export default Input;