import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./List.css"
import {Link} from 'react-router-dom';


function TodoList() {

    const [data, setData] = useState([])
    const [event, setEvent] = useState("")
    const [time, setTime] = useState("")
    const [id, setId] = useState("")

    const getData = () => {
        axios.get(`http://localhost:3003/todos/`)
        .then(response => (
            setData([response.data])
        ))
    }

    useEffect(() => {
        getData();
    })

    const handleEventChange = (event) => {
        event.preventDefault();
        setEvent(event.target.value)
    }
    const handleTimeChange = (event) => {
        event.preventDefault();
        setTime(event.target.value)
    }

    //crud operations
    const createUser = () => {
        axios.post(`http://localhost:3003/todos`, {event, time})
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3003/todos/${id}`, {event, time})
    }



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
                                                        <Link to={`${item.id}`}><button className="btn-update">Update</button></Link>
                                                        <button className="btn-delete" onClick={() => deleteUser(item.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        
                                        
                                        
                                    )
                                )
                            )
                        )

                        
                    }
                </table>


                <div className="form">
                    <form action="">
                        <label htmlFor="">Todo:</label>
                        <input type="text" name="todo" onChange={handleEventChange} /><br />
                        <label htmlFor="">Time:</label>
                        <input type="text" name="time" onChange={handleTimeChange} /><br />
                        <div className="form-submit-button">
                            <input type="submit" onClick={createUser}/>
                        </div>
                        
                    </form>
                </div>

            

            </div>

            

        </div>
    )
}

export default TodoList