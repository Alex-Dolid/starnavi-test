import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import createLogger from './middleware';


export const configureStore = (initialState) => {
    // Saga middleware
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [createLogger(true), sagaMiddleware];

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

    // Running saga middleware
    sagaMiddleware.run(rootSaga);

    return store;
};
