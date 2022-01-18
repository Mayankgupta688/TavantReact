import Axios from 'axios';
import React, {useState, useEffect} from 'react';

export default function EmployeeDetailsHooks(props) {

    var [user, setUser] = useState({
        userName: "",
        userId: ""
    });

    useEffect(() => {
        Axios.get("http://localhost:4000/employees/" + props.match.params.id).then((response) => {
            setUser({
                userName: response.data.name,
                userId: response.data.id
            })
        })
    }, [])

    return (
        <div>
            <h1>Employee Details for Employee Id Hooks: {props.match.params.id}</h1>
            <h2>Employee Name is: {user.userName}</h2>
            <h2>Employee Id is: {user.userId}</h2>
            <input type="button" value="Change" />
        </div>
    )
}