import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Template from './components/template';
import routes from './routes';

const App = ({ history }) =>{
  return (
      <ConnectedRouter history={history}>
        <Template>
          {
            routes
          }
        </Template>
      </ConnectedRouter>
  )
};

export default App;
