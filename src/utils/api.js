import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    responseType: "json"
});

export function POST(task) {
    return instance.post('allTasks/', task);
}

export function deleted(deleted) {
    return (instance.delete(`allTasks/${deleted}`));
}

export function getTasks() {
    return (instance.get(`allTasks/`));
}