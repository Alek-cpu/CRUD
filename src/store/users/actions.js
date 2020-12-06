import axios from 'axios';
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    GET_TODO,
    FAVORITE_TODO
} from './types';
import {tasksAPI} from "../../utils/api";

export const loadUsersData = () => (dispatch) => tasksAPI.getTasks()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

// export const loadUsersData = (todo) => ({
//     type: GET_TODO,
//     params: [{1:'2'},{2:'3'}],
// });

export const addToDo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const deletedToDO = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId,
});

export const favoriteToDO = (todoId) => ({
    type: FAVORITE_TODO,
    payload: todoId,
});

export const update = (todo) => ({
    type: UPDATE_TODO,
    payload: todo,
})