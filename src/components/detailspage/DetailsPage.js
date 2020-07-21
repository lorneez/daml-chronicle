import React from 'react';
import AuthContext from '../../contexts/AuthContext';

class DetailsPage extends React.Component {
  static contextType = AuthContext;

  render() {
    console.log(this.context)
    return (
      <div>
        Details Page
        {this.context.isSignedIn}
      </div>
    )
  };
};

export default DetailsPage;
