import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap'
import {Panel} from 'react-bootstrap';

export default class VisitList extends React.Component {
    render() {
        console.log(this.props.visits);
        return (
                <PanelGroup>
                    { this.props.visits.map((visit, index) => {
                        return (
                                <Panel collapsible defaultExpanded header={visit.Customer.name} bsStyle="primary" key={index}>
                                    <ListGroup fill>
                                        <ListGroupItem header="Vendedor">{visit.Salesman.fullname}</ListGroupItem>
                                        <ListGroupItem header="Fecha planeada">{visit.plannedFor}</ListGroupItem>
                                        <ListGroupItem header="Dirección">{visit.Customer.address1}</ListGroupItem>
                                        <ListGroupItem header="Teléfono">{visit.Customer.phone1}</ListGroupItem>
                                        <ListGroupItem header="Targets" bsStyle="info">
                                        {visit.Targets.map((target, tIndex) => {
                                            return (
                                                <ListGroup key={tIndex}>
                                                    <ListGroupItem header="Notas">{target.notes}</ListGroupItem>
                                                    <ListGroupItem>{target.Company.name}</ListGroupItem>
                                                    <ListGroupItem>{target.Company.web1}</ListGroupItem>
                                                </ListGroup>
                                            );
                                        }
                                        )}
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                        );
                    })
                    }
                </PanelGroup>
        );
    }
}
