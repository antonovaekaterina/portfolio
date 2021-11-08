import {RouteProps} from 'react-router';

export interface IRoute extends RouteProps {
    id: string,
    isNavVisible?: boolean,
    label?: string
}
