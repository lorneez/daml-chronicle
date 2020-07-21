import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

class ProtectedRoute extends React.Component {
    static contextType = AuthContext;

    render() {
        const Component = this.props.component;
        const isAuthenticated = this.context.isSignedIn;
        console.log(isAuthenticated);
        console.log(this.context);
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect exact to={{ pathname: '/' }} />
        );
    }
}

export default ProtectedRoute;
