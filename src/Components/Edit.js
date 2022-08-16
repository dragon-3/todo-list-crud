import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';


function Edit() {

    const [data, setData] = useState([])
    const [event, setEvent] = useState("")
    const [time, setTime] = useState("")
    const { id } = useParams();

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

    return(
        <div>
            <h2>Edit Item</h2>
            <form action="">
                <label htmlFor="">Todo:</label>
                <input type="text" value={event}/><br />
                <label htmlFor="">Time:</label>
                <input type="text" value={time} />
            </form>
        </div>
    )
}

export default Edit