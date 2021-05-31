//import { array } from 'prop-types';
import React , { useEffect, ReactElement, FC } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import {connect, useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { RootState } from '../../index';

const Orders = (props): ReactElement => {

    const { onFetchOrders } = props;

        //const dispatch = useDispatch();

        const orders = useSelector((state: RootState) => {
            return state.order.orders
        });

        const loading =  useSelector((state: RootState) => {
            return state.order.loading
        });

        const token =  useSelector((state: RootState) => {
            return state.auth.token
        });

        const userId =  useSelector((state: RootState) => {
            return state.auth.userId
        });

      // const onFetchOrders= (token, userId) => dispatch(actions.fetchOrder(token, userId));

    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders]);
    
    let orders1 = <Spinner />;
    if(!loading) {
        orders1 = orders.map(order => {
            return <Order 
            key={order.id}
            ingrediants={order.ingrediants}
            price={order.price} />;
        })
    };

    return (
        <div>
            {orders1}
        </div>
    );
}

/*const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};*/

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrder(token, userId))
    }
}

export default withErrorHandler(connect(null, mapDispatchToProps)(Orders), axios);
//export default withErrorHandler(Orders, axios);