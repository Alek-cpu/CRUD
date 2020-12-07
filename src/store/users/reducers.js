import {
    ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO, FAVORITE_TODO
} from './types';

const initialState = {
    tasks: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
        {
            return { ...state, tasks: action.params };
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
    }
    return state;
}