import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios';


function Edit() {

    const [data, setData] = useState([])
    const [event, setEvent] = useState("")
    const [time, setTime] = useState("")
    const { id } = useParams();
    const navigate = useNavigate(); 

    const getData = () => {
        axios.get(`http://localhost:3003/todos/${id}`)
        .then(response => {
            setData(response.data)
            setEvent(response.data.event)
            setTime(response.data.time)
        })
    }

    useEffect(() => {
        getData()
        
    }, [])


    const handleEventChange = (event) => {
        event.preventDefault();
        setEvent(event.target.value)
    }

    const handleTimeChange = (event) => {
        event.preventDefault();
        setTime(event.target.value)
    }

    const updateUser = () => {
        axios.put(`http://localhost:3003/todos/${id}`, {event, time})
        navigate("/")
    }

    return(
        <div>
            <h2>Edit Item</h2>
            <form action="">
                <label htmlFor="">Todo:</label>
                <input type="text" name="todo" onChange={handleEventChange} value={event}/><br />
                <label htmlFor="">Time:</label>
                <input type="text" name="time" onChange={handleTimeChange} value={time} />
                <div className="form-submit-button">
                    <input type="submit" onClick={updateUser}/>
                </div>
            </form>
        </div>
    )
}

export default Edit