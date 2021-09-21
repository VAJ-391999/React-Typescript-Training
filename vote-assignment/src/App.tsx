import Layout from './component/Layout';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Vote from './component/Vote';
import Result from './component/Result';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Layout>
            <Route path="/result" component={Result} exact/>
            <Route path="/" component={Vote} exact/>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
