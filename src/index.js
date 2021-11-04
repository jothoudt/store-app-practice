import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';
import App from './components/App/App';
import './index.css';

const sagaMiddleware= createSagaMiddleware();
/* this creates an array of middleware to use. 
this will prevent a ton of console logs in production code
the redux logger will only be added to project if in development mode
*/
const middlewareList = process.env.NODE_ENV ==='development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  //tells saga middleware to use rootReducer
  rootReducer,
  // adds middleware to project including saga and redux logger
  applyMiddleware(...middlewareList),
)
//tells saga middleware to use rootSaga
sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


