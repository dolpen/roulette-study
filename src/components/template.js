import React from 'react';
import { Link } from 'react-router-dom';

class Template extends React.Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/">ルーレット</Link></li>
          </ul>
          <div>
            { this.props.children }
          </div>
        </div>
    );
  }
}

export default Template;
