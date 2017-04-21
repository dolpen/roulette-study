import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  render(){
    return (
        <div>
          <p><Link to="/1">try seed = 1</Link></p>
          <p><Link to="/10000">try seed = 10000</Link></p>
        </div>
    );
  }
}

export default Index;
