import * as React from 'react';
import bem from 'easy-bem';
import classNames from 'classnames';
import './ExternalLink.scss';
import {LinkHTMLAttributes} from 'react';

const b = bem('ExternalLink');

export default function ExternalLink(props: LinkHTMLAttributes<any>) {
    return (
        <a
            {...props}
            className={classNames('nav', b(), props.className)}
            target={'_black'}
            rel={'nofollow noreferrer'}
        >
            {props.children}
        </a>
    );
}
