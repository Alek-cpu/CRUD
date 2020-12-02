import React, {useState,useEffect} from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";

export default function FavouriteTasks () {
    const [data, setData] = useState([] );

    useEffect( () => {
        const apiTask = "http://localhost:3001/allTasks";
        axios.get(apiTask)
            .then(({data})=> {
                setData(data);
            })
    }, [data]);

    return (
        <>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <div>{item.text}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}