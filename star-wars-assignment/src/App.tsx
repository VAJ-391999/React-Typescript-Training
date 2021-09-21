import {FC} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import StarDetails from './StarDetails';
import StarList from './StarList';

const App:FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/characters/:id" component={StarDetails} exact></Route>
        <Route path="/characters" component={StarList} exact></Route>
        <Redirect from="/" to="/characters" />
      </Switch>
    </div>
  );
}

export default App;
