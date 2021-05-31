import React, { useEffect, FC, ReactElement } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import { connect, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { RootState } from '../../index';


const Checkout: FC<RouteComponentProps> = (props: RouteComponentProps): ReactElement =>  {

    const ings = useSelector((state: RootState) => {
        return state.burgerBuilder.ingrediants
    });

    const purchased = useSelector((state: RootState) => {
        return state.order.purchased
    });

    const checkoutCancelledHnadler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        console.log("replace point");
        props.history.replace('/checkout/contact-data');
    }

    let summary = <Redirect to="/" />

    if (ings) {
        const purchasedRedirect = purchased ? <Redirect to="/" />  : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                    ingrediants={ings}
                    checkoutCancelled={checkoutCancelledHnadler}
                    checkoutContinued={checkoutContinuedHandler}
                />
                <Route path={props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        )
    }

    return summary;
}

/*const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingrediants,
        purchased : state.order.purchased
    };
};



export default connect(mapStateToProps)(Checkout);*/
export default Checkout;