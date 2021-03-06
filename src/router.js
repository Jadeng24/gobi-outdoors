import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Components
import Landing from './Components/Landing/Landing.js';
import Trailers from './Components/Trailers/TrailersPage.js';
import ThankYou from './Components/MailSuccess/ThankYou.js';
import Loading from './Components/MailSuccess/Loading.js';

// Routes for url linking components(pages)
export default (
    <Router>
    <Switch>
        <Route component={Landing} exact path='/' />
            <Route component={Trailers} exact path='/trailers' />
            <Route component={Loading} exact path='/loading' />  
            <Route component={ThankYou} exact path='/confirmation' /> 
        {/* <Route component={Main} exact path='/tents' />
        <Route component={Main} exact path='/accessories' /> */}
        </Switch>
    </Router>    
)
