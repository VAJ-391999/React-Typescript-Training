import React from 'react';
import Login from './components/LoginForm/Login';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import SignUp from './components/SignUpForm/SignUp';
import Home from './components/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
