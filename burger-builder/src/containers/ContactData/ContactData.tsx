import React, {useState, useEffect, FC, ReactElement } from 'react';
import Button from '../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { connect, useSelector, useDispatch } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { updateOject, checkValidity } from '../../shared/utility';
import { RootState, AppDispatch } from '../../index';
import { RouteComponentProps } from 'react-router-dom';

const Contactdata: FC<RouteComponentProps> = (props): ReactElement => {
   const[orderForm, setOrderForm] = useState({
        name: {
                elemenetType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            street: {
                elemenetType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elemenetType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zipcode'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elemenetType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elemenetType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        deliveryMethod: {
            elemenetType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            validation: {},
            value: 'fastest',
            valid: true
        }
    });
                
    const[formIsValid, setFomIsValid] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();
    const onOrderBurger = (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    const ings = useSelector((state: RootState) => {
        return state.burgerBuilder.ingrediants
    });

    const price = useSelector((state: RootState) => {
        return state.burgerBuilder.totalPrice
    });

    const loading = useSelector((state: RootState) => {
        return state.order.loading
    });

    const token = useSelector((state: RootState) => {
        return state.auth.token
    });

    const userId = useSelector((state: RootState) => {
        return state.auth.userId
    });
      
    const orderHandler = (event) => {
        event.preventDefault();

        const formData = {};

        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
            
        }

        const order = {
            ingrediants: ings,
            price: price,
            orderData: formData,
            userId: userId
        }

        onOrderBurger(order, token);
    }

    const inputChangedHandler = (event, inputIdentifier) => {
      
       const updatedFormElement = updateOject(orderForm[inputIdentifier], {
        value: event.target.value,
        valid: checkValidity(event.target.value, orderForm[inputIdentifier].validation),
        touched: true
       });

       const updateOrderForm = updateOject(orderForm, {
        [inputIdentifier]: updatedFormElement
       });
      
       console.log(updatedFormElement);

       let formIsValid = true;
       for (let inputIdentifier in updateOrderForm) {
            formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid;
       }
       console.log(formIsValid);
       setOrderForm(updateOrderForm);
       setFomIsValid(formIsValid);
    }

        const formElementArrary: any[] = [];
        for (let key in orderForm) {
            formElementArrary.push({
                id: key,
                config: orderForm[key]
            });
        }

        let from = (
            <form onSubmit={orderHandler}>
                   
                    {
                        formElementArrary.map(formElement => (
                            <Input 
                                key={formElement.id}
                                elemenetType={formElement.config.elemenetType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.value}
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                                changed={(event) => inputChangedHandler(event, formElement.id)}/>
                        ))
                    }
                    <Button btnType="Success" disabled={formIsValid}>ORDER</Button>
                </form>
        );
        if(loading) {
            from = <Spinner />;
        }

        return (
            <div className="ConatctData">
                <h4>Enter your Contact Data</h4>
                {from}
            </div>
        );
    

}
/*const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingrediants,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
}*/

/*const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default withErrorHandler(connect(null, mapDispatchToProps)(Contactdata), axios);*/

export default withErrorHandler(Contactdata, axios);