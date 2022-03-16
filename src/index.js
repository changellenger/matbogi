import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RenderAfterNavermapsLoaded} from "react-naver-maps";


ReactDOM.render(
    <RenderAfterNavermapsLoaded ncpClientId={"in24ctqv7q"}>
        <App />
    </RenderAfterNavermapsLoaded>,
    document.getElementById('root')
);