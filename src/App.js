import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import OnboardPage from './components/onboardpage/OnboardPage';
import SearchPage from './components/searchpage/SearchPage';
import DetailsPage from './components/detailspage/DetailsPage';
import ProtectedRoute from './routes/ProtectedRoute';

import { AuthStore } from './contexts/AuthContext';

class App extends React.Component {
  //state = { loading: true };

  //static contextType = AuthContext;

  render() {
    return (
      <AuthStore>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={OnboardPage} />
            <ProtectedRoute exact path="/search" component={SearchPage} />
            <ProtectedRoute exact path="/details" component={DetailsPage} />
          </Switch>
        </BrowserRouter>
      </AuthStore>
    );
  }
}

export default App;
