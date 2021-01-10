import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {fetchImagesReduce} from './reducers/imagesReducer';

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
  fetchImages: fetchImagesReduce,
});

export const store = createStore(rootReducer, middleWare);
