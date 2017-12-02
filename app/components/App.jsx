import React from 'react';
import './../assets/scss/main.scss';
import { visits } from "./../assets/mock-data";
import VisitList from "./VisitList";
import {PageHeader} from 'react-bootstrap'
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visits: visits,
        };
    }
    render() {
        return (
            <Grid>
                <PageHeader>Customer Relationship Management <small>CRM</small></PageHeader>
            <Row>
                <Col xs={12} md={8}>
                    <h1>Lista de visitas</h1>
                    <VisitList visits={visits}/>
                </Col>
            </Row>
            </Grid>
        );
    }

}

