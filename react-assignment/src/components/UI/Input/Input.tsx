import React, { FC, ReactElement, MouseEventHandler } from 'react';
import './Input.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface LoginForm {
    key?: string,
    name:string,
    children?: any,
    elementType: string,
    elementConfig?: any,
    value?: string,
    touched?: boolean,
    changed?: any,
    placeholder?: string,
    invalid: boolean,
    type: string,

}

const Input = (props: LoginForm) => {
    //console.log(props.type)
    let err: boolean = false
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    if (props.invalid && props.touched) {
         err = true;
        //console.log("invalid")
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    

    let inputElelment = (<TextField
        id="filled-basic"
        name={props.elementType}
        variant="filled"
        error={err}
        label={props.name}
        value={props.value}
        onChange={props.changed}
         />)

    if (props.name === "password") {
        inputElelment = (<TextField
            id="filled-basic"
            type={values.showPassword ? 'text' : 'password'}
            name={props.elementType}
            variant="filled"
            error={err}
            label={props.name}
            value={props.value}
            onChange={props.changed}
            InputProps={{endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
            )}}
             />)
    }
    

    return (
        <>
            <div className="Input">
            
            <label className="mylabel">{props.name.toUpperCase()}</label><br />
            {inputElelment}
            </div>
        </>
    );
};

export default Input;