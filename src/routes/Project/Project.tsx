import * as React from 'react';
import {RouteChildrenProps} from 'react-router';
import Container from 'shared/Container';
import {SizeEnum} from '../../types';
import projects from 'data/projects';
import bem from 'easy-bem';
import './Project.scss';
import SVG from 'react-inlinesvg';
import externalIcon from 'assets/images/external.svg';
import ProjectMain from 'routes/Project/views/ProjectMain';
import ProjectTask from 'routes/Project/views/ProjectTask';
import ExternalLink from 'shared/ExternalLink/ExternalLink';
import BackButton from 'routes/Project/views/BackButton';

const findProjectById = (id: string | undefined) => {
    if (!id) {
        return null;
    }

    return projects.find(project => project.id === id);
};

const b = bem('Project');

export default function Project(props: RouteChildrenProps<{project: string}>) {
    const project = findProjectById(props.match?.params?.project);

    if (!project) {
        return (
            <Container size={SizeEnum.Md}>
                <BackButton/>
                <p>Проект не найден</p>
            </Container>
        );
    }

    return (
        <article className={b()}>
            <Container size={SizeEnum.Md}>
                <BackButton/>
                <h1>{project.title}</h1>
                {project.externalLink && (
                    <div className={b('external-link-wrap')}>
                        <SVG src={externalIcon}/>
                        <ExternalLink
                            href={project.externalLink}
                            className={b('external-link')}
                        >
                            {project.externalLink}
                        </ExternalLink>
                    </div>
                )}
                <Container size={SizeEnum.Sm}>
                    <ProjectMain
                        stack={project.stack}
                        description={project.description}
                        time={project.time}
                        status={project.status}
                        team={project.team}
                    />
                    {project.tasks && (
                        <div className={b('tasks')}>
                            <h3>Задачи</h3>
                            <div className={b('tasks-list')}>
                                {project.tasks.map((task, idx) => (
                                    <ProjectTask
                                        className={b('task', {
                                            lg: Boolean(task.img),
                                        })}
                                        {...task}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </Container>
            </Container>
        </article>
    );
}
