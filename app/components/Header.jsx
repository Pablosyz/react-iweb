import React from 'react';
import {PageHeader} from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return (
            <PageHeader>Customer Relationship Management <small>{this.props.title}</small></PageHeader>
        );
    }

}