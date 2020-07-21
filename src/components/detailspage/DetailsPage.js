import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';

class DetailsPage extends React.Component {
  static contextType = AuthContext;

  render() {
    return (
      <div>
        Details Page
      </div>
    )
  };
};

export default DetailsPage;
