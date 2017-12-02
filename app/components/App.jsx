import React from 'react';
import './../assets/scss/main.scss';
import { visits } from "./../assets/mock-data";
import VisitList from "./VisitList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visits: visits,
        };
    }
    render() {
        return (
            <div>
                <VisitList visits={visits}/>
            </div>
        );
    }

}

