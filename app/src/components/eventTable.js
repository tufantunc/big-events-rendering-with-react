import React, { Component } from 'react';
import Context from '../store/context';
import Style from './eventTable.module.scss';
import { List, AutoSizer } from "react-virtualized";

class EventTable extends Component {
    constructor() {
        super();
        this.EventItem = this.EventItem.bind(this);
        this.toggleSelectEventItem = this.toggleSelectEventItem.bind(this);
        this.state = {
            selectedEventO: {}
        }
    }
    static contextType = Context;

    toggleSelectEventItem(data) {
        this.context.toggleSelectEventItem(data);
        let selectedEventO = Object.assign(this.state.selectedEventO);

        if (selectedEventO[data.eventCode] && selectedEventO[data.eventCode][data.eventOKey]) {
            delete selectedEventO[data.eventCode][data.eventOKey];
        } else {
            selectedEventO[data.eventCode] = {
                [data.eventOKey]: true
            }
        }

        this.setState({
            selectedEventO
        });
        this.listRef.forceUpdateGrid();
    }

    EventItem({index, key, style}) {
        const {context} = this;
        const bulten = Object.keys(context.events)[index];
        return (<div key={key} style={style}>
                    <div className={`${Style.container}`}>
                        <div className={Style.redText}>
                            <span className={Style.greenText}>{index}</span>
                            <span>{context.events[bulten].D}</span>
                            <span>{context.events[bulten].DAY}</span>
                            <span>{context.events[bulten].LN}</span>
                        </div>
                        {
                            context.commonHeaders.map((headText, cHeadIndex) => (
                                <div key={cHeadIndex}>{headText}</div>
                            ))
                        }
                    </div>
                    <div  className={`${Style.container}`}>
                        <div><span>{bulten}</span> <span>{context.events[bulten].T}</span> {context.events[bulten].N}</div>
                        <div>Yorumlar</div>
                        <div>{context.events[bulten].OCG["1"].MBS}</div>
                        <div
                            className={
                                this.state.selectedEventO[bulten] && this.state.selectedEventO[bulten][`${bulten}${context.events[bulten].OCG["1"].OC["0"].ID}`] ?
                                Style.selectedEvent : ""
                            }
                            onClick={() => this.toggleSelectEventItem({
                                eventCode: bulten,
                                N: context.events[bulten].N,
                                O: context.events[bulten].OCG["1"].OC["0"]["O"],
                                MBS: context.events[bulten].OCG["1"].MBS,
                                eventOKey: `${bulten}${context.events[bulten].OCG["1"].OC["0"].ID}`
                                })}>
                            {context.events[bulten].OCG["1"].OC["0"]["O"]}
                        </div>
                        <div
                            className={
                                this.state.selectedEventO[bulten] && this.state.selectedEventO[bulten][`${bulten}${context.events[bulten].OCG["1"].OC["1"].ID}`] ?
                                Style.selectedEvent : ""
                            }
                            onClick={() => this.toggleSelectEventItem({
                                eventCode: bulten,
                                N: context.events[bulten].N,
                                O: context.events[bulten].OCG["1"].OC["1"]["O"],
                                MBS: context.events[bulten].OCG["1"].MBS,
                                eventOKey: `${bulten}${context.events[bulten].OCG["1"].OC["1"].ID}`
                                })}>
                            {context.events[bulten].OCG["1"].OC["1"]["O"]}
                        </div>
                        <div>&nbsp;</div>
                        <div 
                            className={
                                this.state.selectedEventO[bulten] && this.state.selectedEventO[bulten][`${bulten}${context.events[bulten].OCG["5"].OC["25"].ID}`] ?
                                Style.selectedEvent : ""
                            }
                            onClick={() => this.toggleSelectEventItem({
                                eventCode: bulten,
                                N: context.events[bulten].N,
                                O: context.events[bulten].OCG["5"].OC["25"]["O"],
                                MBS: context.events[bulten].OCG["1"].MBS,
                                eventOKey: `${bulten}${context.events[bulten].OCG["5"].OC["25"].ID}`
                                })}>
                            {context.events[bulten].OCG["5"].OC["25"]["O"]}
                        </div>
                        <div
                            className={
                                this.state.selectedEventO[bulten] && this.state.selectedEventO[bulten][`${bulten}${context.events[bulten].OCG["5"].OC["26"].ID}`] ?
                                Style.selectedEvent : ""
                            }
                            onClick={() => this.toggleSelectEventItem({
                            eventCode: bulten,
                            N: context.events[bulten].N,
                            O: context.events[bulten].OCG["5"].OC["26"]["O"],
                            MBS: context.events[bulten].OCG["1"].MBS,
                            eventOKey: `${bulten}${context.events[bulten].OCG["5"].OC["26"].ID}`
                            })}>
                            {context.events[bulten].OCG["5"].OC["26"]["O"]}
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div
                            className={
                                this.state.selectedEventO[bulten] && this.state.selectedEventO[bulten][`${bulten}${context.events[bulten].OCG["2"].OC["3"].ID}`] ?
                                Style.selectedEvent : ""
                            }
                            onClick={() => this.toggleSelectEventItem({
                            eventCode: bulten,
                            N: context.events[bulten].N,
                            O: context.events[bulten].OCG["2"].OC["3"]["O"],
                            MBS: context.events[bulten].OCG["1"].MBS,
                            eventOKey: `${bulten}${context.events[bulten].OCG["2"].OC["3"].ID}`
                            })}>
                            {context.events[bulten].OCG["2"].OC["3"]["O"]}
                        </div>
                        <div
                            className={
                                this.state.selectedEventO[bulten] && this.state.selectedEventO[bulten][`${bulten}${context.events[bulten].OCG["2"].OC["4"].ID}`] ?
                                Style.selectedEvent : ""
                            }
                            onClick={() => this.toggleSelectEventItem({
                            eventCode: bulten,
                            N: context.events[bulten].N,
                            O: context.events[bulten].OCG["2"].OC["4"]["O"],
                            MBS: context.events[bulten].OCG["1"].MBS,
                            eventOKey: `${bulten}${context.events[bulten].OCG["2"].OC["4"].ID}`
                            })}>
                            {context.events[bulten].OCG["2"].OC["4"]["O"]}
                        </div>
                        <div
                            className={
                                this.state.selectedEventO[bulten] && this.state.selectedEventO[bulten][`${bulten}${context.events[bulten].OCG["2"].OC["5"].ID}`] ?
                                Style.selectedEvent : ""
                            }
                            onClick={() => this.toggleSelectEventItem({
                            eventCode: bulten,
                            N: context.events[bulten].N,
                            O: context.events[bulten].OCG["2"].OC["5"]["O"],
                            MBS: context.events[bulten].OCG["1"].MBS,
                            eventOKey: `${bulten}${context.events[bulten].OCG["2"].OC["5"].ID}`
                            })}>
                            {context.events[bulten].OCG["2"].OC["5"]["O"]}
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>3</div>
                    </div>
                </div>)
    }

    render() {
        // const rowWidth = window.innerWidth;
        // const height = window.innerHeight - 50;
        const rowHeight = 60;

        return (
            <Context.Consumer>
                { context => <AutoSizer>
                                {
                                    ({width, height}) => <List
                                                            ref={(ref) => this.listRef = ref}
                                                            width={width}
                                                            height={height}
                                                            rowHeight={rowHeight}
                                                            rowRenderer={this.EventItem}
                                                            rowCount={Object.keys(context.events).length} />
                                }
                                
                            </AutoSizer>
                }
            </Context.Consumer>
        )
    }
}

export default EventTable;
