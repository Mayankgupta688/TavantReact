import React from 'react';
import EmployeeComponent from "./EmployeeComponent";
import Axios from "axios";

export default class HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/employees").then((response) => {
            this.setState({
                employeeList: response.data
            })
        });
    }

    render() {
        debugger;
        return (
            <div>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeComponent {...employee} {...this.props}></EmployeeComponent>
                })}
            </div>
        )
    }
}