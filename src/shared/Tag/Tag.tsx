import * as React from 'react';
import bem from 'easy-bem';
import classNames from 'classnames';
import {IProps} from './types';
import './Tag.scss';
import {NavLink} from 'react-router-dom';

const b = bem('Tag');

export default function Tag(props: IProps) {
    return (
        <NavLink
            className={classNames(
                b(),
                props.className,
            )}
            to={`/portfolio/tags/${props.label}`}
            activeClassName={b({selected: true})}
        >
            {props.label}
        </NavLink>
    );
}
