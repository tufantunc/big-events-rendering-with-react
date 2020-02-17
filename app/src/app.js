import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages';
import Provider from './store/provider';
import axios from 'axios';

const appElement = document.getElementById("app");

if(window.ssrEnabled) {
    axios.get("/api/bulten")
        .then(res => {
            const json = res.data;
            ReactDOM.hydrate((<Provider events={json}><Index /></Provider>), appElement);
        });
} else {
    ReactDOM.render((<Provider><Index /></Provider>), appElement);
}
