import React from 'react';
import './../assets/scss/main.scss';
import { visits } from "./../assets/mock-data";
import VisitList from "./VisitList";
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import VisitElement from "./VisitElement";
import Header from "./Header";
import {Glyphicon} from 'react-bootstrap';


export default class App extends React.Component {
    render() {
        return (
            <Grid>
                <Header title="CRM"/>
            <Row>
                <Col xs={12} md={8}>
                    <h1><Glyphicon glyph="list"/> Visitas</h1>
                    <VisitList visits = {visits}>
                        <VisitElement visitsData = {visits}/>
                    </VisitList>
                </Col>
            </Row>
            </Grid>
        );
    }

}

