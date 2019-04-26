import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ResultsContainer from './containers/ResultsContainer' 

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/results" component={ResultsContainer} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
