import * as React from 'react';
import bem from 'easy-bem';
import './ProjectTask.scss';
import {ITask} from '../../../types';
import classNames from 'classnames';

const b = bem('ProjectTask');

export default function ProjectTask(props: ITask) {
    return (
        <div className={classNames(b(), props.className)}>
            <p className={classNames(b('title'), 'description')}>{props.title}</p>
            {props.img && (
                <div className={b('img-wrap')}>
                    <img className={b('img')} src={props.img} alt={props.title}/>
                </div>
            )}
            {props.description && (
                <div className={b('description-wrap')}>
                    {props.description.map((text, idx) => (
                        <p key={idx} className={b('description')}>{text}</p>
                    ))}
                </div>
            )}
            {props.externalLink && (
                <a
                    href={props.externalLink}
                    rel={'noreferrer nofollow'}
                    className={classNames(b('external-link'), 'nav')}
                    target={'_blank'}
                >
                    Посмотреть на сайте
                </a>
            )}
        </div>
    );
}
