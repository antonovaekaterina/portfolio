import * as React from 'react';
import './Layout.scss';
import {Route, Switch, useLocation} from 'react-router-dom';
import {IProps} from './types';
import bem from 'easy-bem';
import Header from '../Header';
import {IRoute} from 'routes/types';
import {RouteProps} from 'react-router';
import Footer from 'shared/Footer';

const b = bem('Layout');

const normalizeRouteProps = (route: IRoute):RouteProps => {
    const result:any = {
        ...route,
        exact: Boolean(route.exact),
    };
    delete result.id;
    delete result.isNavVisible;
    delete result.label;
    return result;
};

export default function Layout({routes}: IProps) {
    const location = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className={b()}>
            <Header/>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.id}
                        {...normalizeRouteProps(route)}
                    />
                ))}
            </Switch>
            <Footer/>
        </div>
    );
}
