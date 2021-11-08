import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import Layout from './shared/Layout/Layout';

export default function Application() {
    return (
        <Router>
            <Layout routes={routes}/>
        </Router>
    );
}
