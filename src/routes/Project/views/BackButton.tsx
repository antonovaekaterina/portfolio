import {Link} from 'react-router-dom';
import * as React from 'react';
import SVG from 'react-inlinesvg';
import arrow from 'assets/images/arrow.svg';
import bem from 'easy-bem';
import './BackButton.scss';
import classNames from 'classnames';

const b = bem('BackButton');

export default function BackButton() {
    return (
        <Link className={classNames(b(), 'nav')} to={'/portfolio'}>
            <div className={b('arrow')}>
                <SVG src={arrow}/>
            </div>
            <span>Проекты</span>
        </Link>
    );
}
