import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';
import { todos } from "./states";

export const reducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return [...state].filter(value => value.id !== action.payload);
        case UPDATE_TODO:
            break;
    }
    return state;
}