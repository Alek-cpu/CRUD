import axios from "axios";
import {favoriteToDO} from "../store/users/actions";

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    responseType: "json"
});

export const tasksAPI = {
    getTasks() {
        return(instance.get('allTasks/'));
    },
    postTasks(task) {
        return (instance.post('allTasks/', task
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }));
    },
    deleteTasks(deleted) {
        return (instance.delete(`allTasks/${deleted}`));
    }
    // favoriteToDO(toggle) {
    //     return (instance.patch(`allTasks/${toggle}`));
    // }
}