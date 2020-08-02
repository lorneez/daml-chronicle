import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import OnboardPageComponent from './components/onboardpage/OnboardPageComponent';
import SearchPageComponent from './components/searchpage/SearchPageComponent';
import DetailsPageComponent from './components/detailspage/DetailsPageComponent';
import ProtectedRouteComponent from './protected/ProtectedRouteComponent';

import { AuthStore } from './contexts/AuthContext';
import RedirectComponent from "./components/onboardpage/RedirectComponent";

function App() {
  //state = { loading: true };

  //static contextType = AuthContext;

    return (
      <AuthStore>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={OnboardPageComponent} />
            <Route path="/login" exact component={RedirectComponent} />
            <ProtectedRouteComponent exact path="/search" component={SearchPageComponent} test={"test"}/>
            <ProtectedRouteComponent exact path="/details" component={DetailsPageComponent} />
          </Switch>
        </BrowserRouter>
      </AuthStore>
    );
}

export default App;
