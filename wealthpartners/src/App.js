import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import Life from './components/Life/Life';
import DashboardLife from './components/DashboardLife/DashboardLife';
import SimplifiedIssueWholeLife from './components/SimplifiedIssueWholeLife/SimplifiedIssueWholeLife';
import HybridLTC from './components/HybridLTC/HybridLTC';
import GetSalesAssistance from './components/GetSalesAssistance/GetSalesAssistance';
import SalesResource from './components/SalesResource/SalesResources';


const App = () => {

  const route = (
    <Switch>
      <Route path="/sales-resource" exact component={SalesResource} />
      <Route path="/get-sales-assistance" exact component={GetSalesAssistance} />
      <Route path="/simplified-issue-whole-life" exact component={SimplifiedIssueWholeLife} />
      <Route path="/hybridltc" exact component={HybridLTC} />
      <Route path="/dashboardlife" exact component={DashboardLife} />
      <Route path="/life" exact component={Life} />
      <Route path="/" exact component={Dashboard} />
    </Switch>
  )

  return (
    <div className="App">
      <Layout>
        {route}
      </Layout>
    </div>
  );
}

export default App;
