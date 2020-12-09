import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    GET_TODO,
    ISFAVORITE_TODO,
    TOGGLE_TASK
} from "../types";

const todo = (previousState = {}, action) => {
    switch (action.type) {
        // case ADD_TASK:
        //     return {
        //         id: action.id,
        //         title: action.title,
        //         status: action.status,
        //         isFavorite: action.isFavorite,
        //     };
        // case ADD_NEW_CATEGORY:
        //     return {
        //         id: action.id,
        //         icon: action.icon,
        //         color: action.color,
        //     };
        // case TOGGLE_TASK:
        //     if (previousState.id !== action.params.id) {
        //         return previousState;
        //     } return {
        //     ...action.params,
        // };

        // case EDIT_TITLE:
        //     if (previousState.id !== action.params.id) {
        //         return previousState;
        //     } return {
        //     ...action.params,
        // };
        //
        // case EDIT_CATEGORY_NAME:
        //     if (previousState.id !== action.params.id) {
        //         return previousState;
        //     } return {
        //     ...action.params,
        // };

        case ISFAVORITE_TODO:
            if (previousState.id === action.params.id) { return { ...action.params }; }
            return previousState;

        default: return previousState;
    }
};

export default todo;
