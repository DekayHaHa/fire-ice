import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const app = <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
