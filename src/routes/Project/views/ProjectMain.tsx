import * as React from 'react';
import bem from 'easy-bem';
import './ProjectMain.scss';
import {IProject} from '../../../types';
import Tag from 'shared/Tag';

const b = bem('ProjectMain');

const organizeContent = (content: any) => {
    const map = new Map();
    map.set('О проекте', content.description);
    map.set('Период', content.time);
    map.set('Статус', content.status);
    map.set('Команда', content.team);
    map.set('Стек', content.stack);
    return Array.from(map.entries());
};

const isTags = (key: string, value: string | string[]) => key === 'Стек' && Array.isArray(value);

export default function ProjectMain(props: Pick<IProject, 'stack' | 'description' | 'time' | 'status' | 'team'>) {
    return (
        <main className={b()}>
            {organizeContent(props).map(([key, value]) => value && (
                <div
                    className={b('item')}
                    key={key}
                >
                    <h3>{key}</h3>
                    <p>{isTags(key, value)
                        ? (value as string[]).map(tag => <Tag key={tag} className={b('tag')} label={tag}/>)
                        : value}
                    </p>
                </div>
            ))}
        </main>
    );
}
