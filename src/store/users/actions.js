import axios from 'axios';
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    GET_TODO,
    ISFAVORITE_TODO
} from './types';
import {getTasks, POST, deleted, patchTask, getTasksFavourite, getTasksCompleted} from "../../utils/api";

export const loadUsersData = () => (dispatch) => getTasks()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

export const loadFavouriteData = () => (dispatch) => getTasksFavourite()
    .then((result) => dispatch({
        type: GET_TODO,
        params: result.data,
    }));

export const loadCompletedData = () => (dispatch) => getTasksCompleted()
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

export const isFavoriteTask = (element) => (dispatch) => patchTask(element.id, element)
    .then(() => dispatch({
        type: ISFAVORITE_TODO,
        params: element,
    }));