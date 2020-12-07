import axios from 'axios';
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    GET_TODO,
    FAVORITE_TODO
} from './types';
import {getTasks, POST, deleted} from "../../utils/api";

export const loadUsersData = () => (dispatch) => getTasks()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

export const addNewTask = (currentValue) => (dispatch) => POST(currentValue)
    .then((result) => dispatch({
        type: ADD_TODO,
        params: result.data,
    }));

export const deletedTask = (id) => (dispatch) => deleted(id)
    .then((result) => dispatch({
        type: DELETE_TODO,
        id
    }));