import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route } from 'react-router-dom'
import Car from './containers/Car' 
import './app.css'

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import promiseMiddleware from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const composeEnhancers = composeWithDevTools({
        // options like actionSanitizer, stateSanitizer
      });


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
  middleware.push(promiseMiddleware);
}

/*
const store = createStore(
        reducers,
        applyMiddleware(...middleware),
)*/
      
      const store = createStore(reducers,
         /* preloadedState, */
        composeEnhancers(
                applyMiddleware(...middleware),
                // other store enhancers if any
        )
);

ReactDOM.render(

    <Provider store = {store}>
            <BrowserRouter>
            <div>
            <Route exact path='/' component = {App}></Route>
            <Route exact path='/car/:id' component = {Car}></Route>
            </div>
    </BrowserRouter>
        </Provider>

, document.getElementById('root')
);
registerServiceWorker();
