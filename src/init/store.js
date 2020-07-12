// Core
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
// Extensions
import {composeWithDevTools} from 'redux-devtools-extension';
import createLogger from './middleware';
// Root Reducer/Saga
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const configureStore = (initialState) => {
    // Saga middleware
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [createLogger(true), sagaMiddleware];

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

    // Running saga middleware
    sagaMiddleware.run(rootSaga);

    return store;
};
