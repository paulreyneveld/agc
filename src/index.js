import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './reducers/loginReducer'
import photosReducer from './reducers/photosReducer'
import errorsReducer from './reducers/errorReducer';

// const store = createStore(loginReducer, applyMiddleware(thunk))

const store = createStore(
  combineReducers({
    login: loginReducer,
    photos: photosReducer,
    errors: errorsReducer
  }),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


