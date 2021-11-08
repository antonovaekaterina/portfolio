import * as React from 'react';
import Portfolio from './Portfolio';
import {IRoute} from './types';
import {Redirect} from 'react-router-dom';
import Project from 'routes/Project';
import AboutMe from 'routes/AboutMe';

const ROUTE_ROOT = 'root';
const ROUTE_PORTFOLIO = 'portfolio';
const ROUTE_ABOUT = 'about';
const ROUTE_PROJECT = 'project';
const ROUTE_TAG = 'tag';

const routes: IRoute[] = [
    {
        id: ROUTE_ROOT,
        path: '/',
        exact: true,
        isNavVisible: false,
        render: () => <Redirect to={'/portfolio'}/>,
    },
    {
        id: ROUTE_PORTFOLIO,
        path: '/portfolio',
        exact: true,
        label: 'Портфолио',
        component: Portfolio,
    },
    {
        id: ROUTE_TAG,
        path: '/portfolio/tags/:tag',
        isNavVisible: false,
        exact: true,
        component: Portfolio,
    },
    {
        id: ROUTE_PROJECT,
        path: '/portfolio/:project',
        isNavVisible: false,
        exact: true,
        component: Project,
    },
    {
        id: ROUTE_ABOUT,
        path: '/about',
        exact: true,
        label: 'Обо мне',
        render: AboutMe,
    },
];

export default routes;
