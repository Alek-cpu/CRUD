import {
    ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO
} from './types';
import { todos } from "./states";



export const reducer = (state = todos, action) => {
    switch (action.type) {
        case GET_TODO:
        {
            return { ...state, tasks: action.params };
        }
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return [...state].filter((item, index) => index !== action.payload);
        case UPDATE_TODO:
            return state;
    }
    return state;
}