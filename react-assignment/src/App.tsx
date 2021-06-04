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
import MyPhoto from './containers/MyInfo/MyProfile';
import MyDownloads from './containers/MyInfo/MyDownloads'
import Layout from './components/Layout/Layout';
import About1 from './containers/About/About1';
import Contact1 from './containers/Contact/Contact1';
import MyTeam from './containers/MyInfo/MyTeam';
import { MemberList } from './containers/MyInfo/Context/MyTeamMember'

function App() {
  
  const routeMain = (
    <Switch>
          <Route path="/myinfo/myteam" exact component={MemberList} />
          <Route path="/myinfo/mydownloads" exact component={MyDownloads} />
          <Route path="/myinfo/myprofile" exact component={MyPhoto} />
          <Route path="/home/home2" exact component={Home2} />
          <Route path="/home/home1" exact component={Home1} />
          <Route path="/about/about1" exact component={About1} />
          <Route path="/contact/contact1" exact component={Contact1} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
    </Switch>
  )

  return (
    <div className="App">
     {/*
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
      </Switch> */} 

      <Layout>
        {routeMain}
      </Layout>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/" exact component={Login} />
    </div>
  );
}

export default App;
