import React, {useState, useEffect} from 'react';
import EmployeeComponent from "./EmployeeComponent";
import Axios from "axios";

export default function HomeComponentHook(props) {
    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data)
        });
    }, []);

    return (
        <div>
            <h1>Hooks Implementation Updated</h1>
            {employeeList.map((employee) => {
                return <EmployeeComponent {...employee} {...props}></EmployeeComponent>
            })}
        </div>
    )
}