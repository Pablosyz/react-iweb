import React from 'react';
import {PanelGroup} from 'react-bootstrap';
import VisitElement from "./VisitElement";

export default class VisitList extends React.Component {
    render() {
        return (
            <PanelGroup>
                { this.props.visits.map((visit, index) => {
                    return (
                            <VisitElement visitData = {visit} index = {index}/>
                    );
                })
                }
            </PanelGroup>
        );
    }
}
