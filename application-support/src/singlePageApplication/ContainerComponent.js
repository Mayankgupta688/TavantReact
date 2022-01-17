import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default class ContainerComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <HeaderComponent></HeaderComponent><hr/>
                <ContentComponent></ContentComponent><hr/>
                <FooterComponent></FooterComponent><hr/>
            </BrowserRouter>
        )
    }
}