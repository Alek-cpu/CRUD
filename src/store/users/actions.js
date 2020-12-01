import axios from 'axios';
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    FETCH_TODO
} from './types';

export const fetch = (todo) => async dispatch  => {
    const response = await axios.get('http://localhost:3001/allTasks');

    dispatch({
        type: FETCH_TODO,
        payload: response.data
    });
}

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