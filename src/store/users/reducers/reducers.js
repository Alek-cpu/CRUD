import {
    ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO, ISFAVORITE_TODO, TOGGLE_TASK
} from '../types';

const initialState = {
    tasks: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO: {
            return {...state, tasks: action.params};
        }
        case ADD_TODO:
            return {
                ...state,
                tasks: [...state.tasks, action.params],
            };
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.id),
            };
        case ISFAVORITE_TODO:
            return {
                ...state,
                tasks: state.tasks.map((item) => item.id === action.params.id ? action.params : item),
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((item) => item.id === action.params.id ? action.params : item)
            };
        case UPDATE_TODO:
            return {
                ...state,
                tasks: state.tasks.map((item) => item.id === action.params.id ? action.params : item)
            }
    }
    return state;
}