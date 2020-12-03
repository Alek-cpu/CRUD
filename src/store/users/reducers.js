import {
    ADD_TODO, DELETE_TODO, UPDATE_TODO, FETCH_TODO
} from './types';
import { todos } from "./states";

export const reducer = (state = todos, action) => {
    switch (action.type) {
        case FETCH_TODO:
            return [...state, action.payload];
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return [...state].filter(value => value.id !== action.payload);
        case UPDATE_TODO:
            return state;
    }
    return state;
}