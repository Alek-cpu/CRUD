import { createStore, applyMiddleware } from 'redux';
import { reducer } from './users/reducers';

export let index = createStore(reducer);
// export let index = createStore(reducer, applyMiddleware(thunk));