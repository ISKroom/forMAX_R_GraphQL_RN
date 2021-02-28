import { Router, Route, Switch } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';
import JobList from './components/JobList';
import JobCreate from './components/JobCreate';
import JobDetail from './components/JobDetail';
import Header from './components/Header';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={JobList} />
        <Route exact path="/create" component={JobCreate} />
        <Route exact path="/detail/:id" component={JobDetail} />
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
