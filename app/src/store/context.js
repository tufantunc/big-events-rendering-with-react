import React from 'react';

const context = React.createContext({
    commonHeaders: [],
    selectedEvents: {},
    events: {},
    setEvents: () => {},
    toggleSelectEventItem: () => {}
});

export default context;
