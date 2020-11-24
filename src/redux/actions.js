export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'EDIT_TODO';
// export const CHECKED_TODO = 'CHECKED_TODO';

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