import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./List.css"


function TodoList() {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get(`http://localhost:3001/todos`)
        .then(response => (
            setData([response.data])
        ))
    }

    useEffect(() => {
        getData();
    })

    return(
        <div className="content">
            <div >

            <h2>To do list</h2>

                <table>
                    <thead>
                        <th>Todo</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </thead>

                    {
                        data.map(
                            items => (
                                items.map(
                                    item => (
                                        

                                            <tbody>
                                                <tr key={item.id}>
                                                    <td>{item.event}</td>
                                                    <td>{item.time}</td>
                                                    <td>
                                                        <button className="btn-update">Update</button>
                                                        <button className="btn-delete">Delete</button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        
                                        
                                        
                                    )
                                )
                            )
                        )
                    }
                </table>

            </div>

            

        </div>
    )
}

export default TodoList