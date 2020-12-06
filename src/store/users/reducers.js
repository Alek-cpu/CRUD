import {
    ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO, FAVORITE_TODO
} from './types';
// import { todos } from "./states";


const initialState = {
    tasks: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
        {
            return { ...state, tasks: action.params };
        }
        // case ADD_TODO: {
        //     return [...state, action.payload]; ПЕРЕДЕЛАТЬ С МИДЛВАРАМИ
        // }
        // case DELETE_TODO:
        //     return [...state].filter((item, index) => index !== action.payload);
        // case FAVORITE_TODO:
        //     return [...state].filter((item, index) => index !== action.payload);
        // case UPDATE_TODO:
        //     return state;
    }
    return state;
}