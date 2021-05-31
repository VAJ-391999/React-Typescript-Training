import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import Button from './components/UI/Button/Button';
//import NavigationItem from './components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import './components/Navigation/NavigationItems/NavigationItem/NavigationItem.css';

//import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import createSagaMiddleware from 'redux-saga';
import { withauth, watchBurgerBuilder , watchOrder} from './store/sagas/index';

/*const routing = (
  <Router>
    <h1>Hello</h1>
    <nav>
    <ul className="NavigationItem">
      <li> 
      <NavLink to="/" exact>
      <NavigationItem>Burger Builder</NavigationItem>
      </NavLink>
      </li>
      <li>
      <NavLink to="/components/UI/Button/Button">
        <NavigationItem>Button</NavigationItem>
      </NavLink>
      </li>
    </ul>
    </nav>
    <Route path="/" exact component={App} />
    <Route path="/components/UI/Button/Button" component={Button} />
  </Router>
)*/

//const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || null;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
});



const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware)
));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(withauth);
sagaMiddleware.run(watchBurgerBuilder);
sagaMiddleware.run(watchOrder);


const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
