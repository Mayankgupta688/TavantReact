import React from 'react';
import EmployeeComponent from "../components/EmployeeComponent";

export default class HomeComponent extends React.Component {

    render() {
        debugger;
        return (
            <div>
                {this.props.employeeList.map((employee) => {
                    return <EmployeeComponent {...employee}></EmployeeComponent>
                })}
            </div>
        )
    }
}