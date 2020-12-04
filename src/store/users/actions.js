import axios from 'axios';
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    GET_TODO
} from './types';
import {getTaski} from "./request";

export const loadUsersData = () => (dispatch) => getTaski()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

// export const loadUsersData = (todo) => ({
//     type: GET_TODO,
//     payload: todo.data,
// });

export const addToDo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const deletedToDO = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId,
});

export const update = (todo) => ({
    type: UPDATE_TODO,
    payload: todo,
})