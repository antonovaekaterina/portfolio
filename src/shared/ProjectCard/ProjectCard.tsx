import * as React from 'react';
import bem from 'easy-bem';
import './ProjectCard.scss';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {IProject} from '../../types';

const b = bem('ProjectCard');

export default function ProjectCard(props: IProject) {
    return (
        <Link
            to={`/portfolio/${props.id}`}
            className={b()}
        >
            <h3 className={b('title')}>{props.title}</h3>
            <p className={classNames(b('description'), 'description')}>
                {props.shortDescription}
            </p>
            {props.time && <time className={b('time')}>{props.time}</time>}
            <div className={b('bottom')}>
                {props.preview && (
                    <div className={b('img-wrap')}>
                        <img
                            className={b('img')}
                            src={props.preview}
                            alt={props.title}
                        />
                    </div>
                )}
                <span className={classNames(b('link'), 'nav')}>Подробнее</span>
            </div>
        </Link>

    );
}
