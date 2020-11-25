import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from './types';

export function addToDo(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export function deletedToDO(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }
}

export function update(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo,
    }
}