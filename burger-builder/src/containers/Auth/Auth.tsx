import React, { useState, useEffect, ReactElement, FC } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import  './Auth.css';
import * as actions from '../../store/actions/index';
import { connect, useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect, RouteComponentProps} from 'react-router-dom';
import { updateOject, checkValidity } from '../../shared/utility';
import { RootState, AppDispatch } from '../../index';

type Props = RouteComponentProps;

const Auth: FC<Props> = (props: Props): ReactElement => {

    const [controls, setControls] = useState({
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false,
      }
  });
        
        
    const[isSignUp, setIsSignUp]  = useState<boolean>(true);

   // let { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => {
      return state.auth.loading;
    });

    const error = useSelector((state: RootState) => {
      return state.auth.error;
    });

    const isAuthenticated = useSelector((state: RootState) => {
      return state.auth.token !== null;
    });

   const buildingBurger = useSelector((state: RootState) => {
      return state.burgerBuilder.building;
    });

    const authRedirectPath = useSelector((state: RootState) => {
      return state.auth.authRedirectPath;
    });

    const onAuth= (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp));
    const onSetAuthRedirectPath= () => dispatch(actions.setAuthRedirectPath('/'))
    

      useEffect(() => {
        if(!buildingBurger && authRedirectPath !== '/'){
            onSetAuthRedirectPath();
        }
      }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);
      

     
      const inputChangedHandler = (e, controlName) => {
        const updatedControls = updateOject(controls, {
          [controlName]: updateOject(controls[controlName], {
            value: e.target.value,
            valid: checkValidity(e.target.value, controls[controlName].validation),
            touched: true
          })
        });

        setControls(updatedControls);
      }

      const switchAuthHandler = () => {
          setIsSignUp(!isSignUp);
      }

      const submitHandler = (event) => {
          event.preventDefault();
          onAuth(controls.email.value, controls.password.value, isSignUp);
      }

        const formElementsArray: any[] = [];
        for(let key in controls){
        formElementsArray.push({
            id: key,
            config: controls[key]
        })
        }

        let form: JSX.Element[] | JSX.Element = formElementsArray.map(formEl => (
            <Input
              key={formEl.id}
              elemenetType={formEl.config.elementType}
              elementConfig={formEl.config.elementConfig}
              value={formEl.config.value}
              invalid={!formEl.config.valid}
              shouldValidate={formEl.config.validation}
              touched={formEl.config.touched}
              changed={(event) => inputChangedHandler(event, formEl.id)}
            />
      
          ))

          if(loading) {
              form = <Spinner />
          }

          let errorMessage: null | JSX.Element = null;

          if (error) {
              errorMessage = (
                  <p>{error.message}</p>
              )
          }

          let authRedirect: null | JSX.Element = null;

          if(isAuthenticated) {
            authRedirect = <Redirect to={authRedirectPath} />
          }

          return (
            <div className="Auth">
                {authRedirect}
                {errorMessage}
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success">
                        Submit
                    </Button>

                    <Button btnType="Danger" clicked={switchAuthHandler}>
                        Switch to {isSignUp ? "SIGNIN" : "SIGNUP"}
                    </Button>
                </form>
            </div>
          );
      };


/*const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};*/

/*const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};*/

//export default connect(mapStateToProps, mapDispatchToProps)(Auth);
//export default connect(null, mapDispatchToProps)(Auth);
export default Auth;