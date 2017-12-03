import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

export default class VisitElement extends React.Component {
    render() {
        const visit = this.props.visitData;
        console.log(visit);
        return(
            <Panel collapsible defaultExpanded header={visit.Customer.name} bsStyle="primary" key={visit.id}>
                <ListGroup fill>
                    <ListGroupItem header="Vendedor" key={visit.Salesman.id}>
                        <Glyphicon glyph="user"/> {visit.Salesman.fullname}
                    </ListGroupItem>
                    <ListGroupItem header="Fecha planeada">
                        <Glyphicon glyph="calendar"/> {this.dateFormatter(visit.plannedFor)}
                    </ListGroupItem>
                    <ListGroupItem header="Dirección">
                        <Glyphicon glyph="home"/> {visit.Customer.address1} {visit.Customer.postalCode} {visit.Customer.city}
                    </ListGroupItem>
                    <ListGroupItem header="Teléfono">
                        <Glyphicon glyph="phone"/> {visit.Customer.phone1}
                    </ListGroupItem>
                    {/* <ListGroupItem header="Targets" bsStyle="info">
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
                    </ListGroupItem>*/}
                </ListGroup>
            </Panel>
        );
    }

    dateFormatter(date) {
        var date = new Date(date);
        return (date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    }
}
