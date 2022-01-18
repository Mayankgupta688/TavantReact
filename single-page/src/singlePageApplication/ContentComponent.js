import React from 'react';
import { Route } from "react-router-dom";
import AboutComponent from './AboutComponent';
import HomeComponentHook from './HomeComponentHook';
import HelpComponent from './HelpComponent';
import EmployeeDetailsHooks from './EmployeeDetailsHooks';

export default class ContentComponent extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomeComponentHook} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/help" component={HelpComponent} />
                <Route exact path="/details/:id" component={EmployeeDetailsHooks} />
            </div>
        )
    }
}