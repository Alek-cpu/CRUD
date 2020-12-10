import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    responseType: "json"
});

export function postTask(task) {
    return instance.post('allTasks/', task);
}

export function deletedTaskItem(deleted) {
    return (instance.delete(`allTasks/${deleted}`));
}

export function getTasks() {
    return (instance.get(`allTasks/`));
}

export function getTasksFavourite() {
    return (instance.get(`allTasks/?favorite=true`));
}

export function getTasksCompleted() {
    return (instance.get(`allTasks/?completed=true`));
}
export function patchTask(id, editTask) {
    return instance.patch(`allTasks/${id}`, editTask);
}
