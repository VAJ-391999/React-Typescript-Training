import IRoute from '../../interfaces/route';
import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout/Logout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import Orders from '../Orders/Orders';

export const routes: IRoute[] = [
    {
        path: '/',
        name: 'BurgerBuilder Page',
        component: BurgerBuilder,
        exact: true,
    },
    {
        path: '/auth',
        name: 'Authentication Page',
        component: Auth,
        exact: true,
    }
]

export const authroutes: IRoute[] = [
    {
        path: '/',
        name: 'App Page',
        component: BurgerBuilder,
        exact: true,
    },
    {
        path: '/auth',
        name: 'Authentication Page',
        component: Auth,
        exact: true,
    },
    {
        path: '/orders',
        name: 'Orders Page',
        component: Orders,
        exact: true,
    },
    {
        path: '/checkout',
        name: 'Checkout Page',
        component: Checkout,
        exact: true,
    },
    {
        path: '/logout',
        name: 'Logout Page',
        component: Logout,
        exact: false,
    }
]

