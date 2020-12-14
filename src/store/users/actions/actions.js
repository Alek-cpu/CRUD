import axios from 'axios';
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    GET_TODO,
    ISFAVORITE_TODO, TOGGLE_TASK
} from '../types';
import {
    getTasks, postTask, deletedTaskItem,
    patchTask, getTasksFavourite, getTasksCompleted
} from "../../../utils/api";

export const loadUsersData = () => (dispatch) => getTasks()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

export const loadFavoriteTask = () => (dispatch) => getTasksFavourite()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

export const loadCompletedData = () => (dispatch) => getTasksCompleted()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

export const addNewTask = (currentValue) => (dispatch) => postTask(currentValue)
    .then((result) => dispatch({
        type: ADD_TODO,
        params: result.data,
    }));

export const deletedTask = (id) => (dispatch) => deletedTaskItem(id)
    .then((result) => dispatch({
        type: DELETE_TODO,
        id
    }));

export const markToFavorite = (params) => (dispatch) => patchTask(params.id, params)
    .then((el) => dispatch({
        type: ISFAVORITE_TODO,
        params,
    }));

export const completedTask = (element) => (dispatch) => patchTask(element.id, element)
    .then(() => dispatch({
        type: TOGGLE_TASK,
        params: element,
    }));

export const uploadTask = (element) => (dispatch) => patchTask(element.id, element)
    .then(() => dispatch({
        type: UPDATE_TODO,
        params: element,
    }));
