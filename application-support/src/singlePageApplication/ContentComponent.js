import React from 'react';
import { Route } from "react-router-dom";
import AboutComponent from './AboutComponent';
import HelpComponent from './HelpComponent';
import HomeComponent from './HomeComponent';
import EmployeeDetails from './EmployeeDetails';


export default class ContentComponent extends React.Component {


    render() {
        return (
            <div style={{"border": "1px solid red", "height": "1000px", "padding": "10px", overflow: "auto"}}>
                <h1>This is Content Component</h1>
      
                    <Route path="/" component={HomeComponent} />
                    <Route path="/about" component={AboutComponent} />
                    <Route path="/help" component={HelpComponent} />
                    <Route path="/details/:id" component={EmployeeDetails} />
            
            </div>
        )
    }
}