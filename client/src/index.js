import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App';
import reducers from './reducers/combineReducers'
import { Provider } from 'react-redux'
import './index.css'
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
  posts:{data:[], order:'VoteScore'},
  categories: {data:[]}
}

const store = createStore(reducers, initialState,  applyMiddleware(thunk))

ReactDOM.render(    
  
  <Provider store={store}>
    <App/>
  </Provider>
  , 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
