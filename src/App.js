import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import OnboardPage from './components/onboardpage/OnboardPage';
import SearchPage from './components/searchpage/SearchPage';
import DetailsPage from './components/detailspage/DetailsPage';
import ProtectedRoute from './routes/ProtectedRoute';

import { AuthStore } from './contexts/AuthContext';

class App extends React.Component {
  render() {
    return (
      <AuthStore>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={OnboardPage} />
            <ProtectedRoute path="/search" exact component={SearchPage} />
            <ProtectedRoute path="/details" exact component={DetailsPage} />
          </Switch>
          </Router>
      </AuthStore>
    );
  }
}

export default App;
