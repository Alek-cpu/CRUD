import { createStore } from 'redux';
import { reducer } from './users/reducers';

export let index = createStore(reducer);