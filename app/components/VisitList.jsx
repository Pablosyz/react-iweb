import React from 'react';

export default class VisitList extends React.Component {
    render() {
        console.log(this.props.c);
        return (
            <ul>Aquí va la lista de visitas:</ul>
        );
    }
}
