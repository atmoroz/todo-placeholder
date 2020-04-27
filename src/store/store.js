import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer/reducer";

import watcher from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watcher);

export default store;
