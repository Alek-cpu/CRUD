import { createStore, applyMiddleware } from 'redux';
import { reducer } from './users/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export let index = createStore(reducer, applyMiddleware(thunk));