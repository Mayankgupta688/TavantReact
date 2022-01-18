import  { useState, useEffect } from "react";
import Axios from "axios";

export default function UseStateEmployeesComponent() {
    var [employeeList, setEmployeeList] = useState([]);
    var [counter, setCounter] = useState(0);
    var [myCounter, setMyCounter] = useState(100);

    setTimeout(() => {
        setCounter(counter + 1);
    }, 5000)

    function incrementMyCounter() {
        setMyCounter(myCounter + 1)
    }

    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            console.log(response.data.length)
            setEmployeeList(response.data);
        })
    }, [])

    useEffect(() => {
        console.log("Hello World My Counter...")
    }, [myCounter])


    useEffect(() => {
        console.log("Hello World Counter...")
    }, [counter])

    useEffect(() => {
        console.log("Component Did Update")
    }, [myCounter, counter])

    return (
        <div>
            <h1>My Initial Counter is: {myCounter}</h1>
            <input type="button" value="IncrementMy Counter" onClick={incrementMyCounter} />
            <h1>Employee List is given Below: {counter}</h1><hr/>
            {employeeList.map((employee)=> {
                return <h2>Employee Name is {employee.name}</h2>
            })}
        </div>
    )
}