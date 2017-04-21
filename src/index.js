import { applyMiddleware, compose, createStore } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import rootReducer from './reducers';

const history = createHashHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
);

ReactDOM.render(
    <Provider store={store}>
      <App history={history}/>
    </Provider>,
    document.getElementById('app')
);
