import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import './background.css';
import App from './App';
import Plader from './Plader';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul id="lst">
                <li>
                    <Link to="/">Hjem</Link>
                </li>
                <li>
                    <Link to="/plader">Plader</Link>
                </li>
            </ul>
        </div>
        <Route exact path="/" component={App}/>
        <Route path="/plader" component={Plader}/>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
