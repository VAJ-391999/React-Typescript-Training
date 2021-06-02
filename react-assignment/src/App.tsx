import React from 'react';
import Login from './components/LoginForm/Login';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import SignUp from './components/SignUpForm/SignUp';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Home1 from './containers/Home/Home1';
import Home2 from './containers/Home/Home2';
import MyPhoto from './containers/Profile/MyPhoto';
import MyDownloads from './containers/Profile/MyDownloads'

function App() {
  

  return (
    <div className="App">
      <Switch>
          <Route path="/myprofile/mydownloads" exact component={MyDownloads} />
          <Route path="/myprofile/myphoto" exact component={MyPhoto} />
          <Route path="/home/home2" exact component={Home2} />
          <Route path="/home/home1" exact component={Home1} />
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
