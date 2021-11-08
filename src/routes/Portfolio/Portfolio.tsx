import * as React from 'react';
import './Portfolio.scss';
import bem from 'easy-bem';
import projects from 'data/projects';
import ProjectCard from 'shared/ProjectCard';
import Container from 'shared/Container';
import {IProject, SizeEnum} from '../../types';
import Tag from 'shared/Tag';
import {RouteChildrenProps} from 'react-router';
import {Link} from 'react-router-dom';

const b = bem('Portfolio');

const tags = (projects: IProject[]) => {
    const result = projects.reduce((acc: Set<string>, project) => {
        project.stack?.forEach(tag => acc.add(tag));
        return acc;
    }, new Set());

    return Array.from(result);
};

export default function Portfolio(props: RouteChildrenProps<{tag: string}>) {
    const activeTag = props.match?.params?.tag;
    let filteredProjects = projects;
    if (activeTag) {
        filteredProjects = projects.filter(({stack}) => stack?.some(tag => tag === activeTag));
    }

    return (
        <div className={b()}>
            <Container size={SizeEnum.Md}>
                <h1>Портфолио</h1>
                <div className={b('tags-list')}>
                    {tags(projects).map((tag: string) => <Tag key={tag} label={tag} className={b('tag')}/>)}
                    {activeTag && <Link to={'/portfolio'} className={b('tags-reset')}>Сбросить все</Link>}
                </div>
                <div className={b('catalog')}>
                    {filteredProjects.map(project => <ProjectCard key={project.id} {...project}/>)}
                </div>
            </Container>
        </div>
    );
}
