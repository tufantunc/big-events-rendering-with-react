import React, { Component } from 'react';
import Context from './context';

class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEvents: {},
            events: props.events || {},
            commonHeaders: ["Yorumlar", "", "1", "x", "2", "Alt", "Üst", "H1", "1", "x", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"]
        }
    
        this.toggleSelectEventItem = ({eventCode, N, O, MBS, eventOKey}) => {
            const newSelectedEventContent = { N, O, MBS, eventOKey };
            const selectedEvents = Object.assign(this.state.selectedEvents);
            if(selectedEvents[eventCode] && selectedEvents[eventCode].eventOKey === eventOKey) {
                delete selectedEvents[eventCode];
            } else {
                selectedEvents[eventCode] = newSelectedEventContent
            }
            this.setState({selectedEvents});
        }

        this.setEvents = (events) => {
            this.setState({events});
        }
    }

    render() {
        return (
            <Context.Provider
                value={{
                    toggleSelectEventItem: this.toggleSelectEventItem,
                    setEvents: this.setEvents,
                    events: this.state.events,
                    selectedEvents: this.state.selectedEvents,
                    commonHeaders: this.state.commonHeaders
                }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;
