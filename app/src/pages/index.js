import React, { Component, Fragment } from 'react';
import Context from '../store/context';
import axios from 'axios';
import PageHeader from '../components/pageHeader';
import EventTable from '../components/eventTable';
import Total from '../components/total';
import './global.scss';

class Index extends Component {
    componentDidMount() {
        if (!this.context.events.length) {
            axios.get("/api/bulten")
                .then(res => {
                    const json = res.data;
                    this.context.setEvents(json);
                });
        }
    }

    render() {
        return (
            <Fragment>
                <PageHeader />
                <Context.Provider value={{...this.context}}>
                    <EventTable />
                    <Total />
                </Context.Provider>
            </Fragment>
        )
    }
}

Index.contextType = Context;

export default Index;
