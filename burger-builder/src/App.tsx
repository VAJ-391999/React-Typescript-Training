
import React, { ReactElement, Suspense, useEffect, FC } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as action from './store/actions/index';
import { routes, authroutes } from './containers/Routes/routes';

//import asyncComponent from './hoc/asyncComponent/asyncComponent';
//import Orders from './containers/Orders/Orders';
//import Auth from './containers/Auth/Auth';
//import Checkout from './containers/Checkout/Checkout';
//import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
//import Logout from './containers/Auth/Logout/Logout';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const App: FC<RouteComponentProps> = (props: RouteComponentProps): ReactElement => {

  console.log("props", props);

  //const { onTryAuthSignup } = props;

  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state: any) => {
    return state.auth.token !== null;
  });

  const onTryAuthSignup = () => dispatch(action.authCheckState())

  useEffect(() => {
    onTryAuthSignup();
  }, [onTryAuthSignup]);



  let routesMain = (
    <Switch>
      {/*<Route path="/" exact component={BurgerBuilder}/> 
        <Route path="/auth" render={(props) => <Auth {...props} />} />*/}

      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => (
              <route.component {...props} {...route.props} />
            )}
          />
        )
      })}

      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routesMain = (
      <Switch>
        {/*<Route path="/orders" render={(props) => <Orders {...props}  />} />
          <Route path="/checkout" render={(props) => <Checkout {...props} />}/>
          <Route path="/auth" render={(props) => <Auth {...props} />} />
          <Route path="/logout" component={Logout} />
      <Route path="/" exact component={BurgerBuilder}/>*/}

        {authroutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          )
        })}
        <Route path="/checkout" render={(props) => <Checkout {...props} />}/>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routesMain}
        </Suspense>
      </Layout>
    </div>
  );

}

/*const mapStateToProps = state => {
  return {
    isAuthenticated : state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAuthSignup: () => dispatch(action.authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App));*/

export default withRouter(App);
