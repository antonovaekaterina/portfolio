import * as React from 'react';
import projects from 'data/projects';
import bem from 'easy-bem';
import './ProjectSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import ProjectCard from 'shared/ProjectCard';
import {IProject} from '../../../types';
import {useRef} from 'react';
import {useUpdateEffect} from 'react-use';
import ProjectSliderArrow from 'routes/Project/views/ProjectSliderArrow';

const b = bem('ProjectSlider');

export default function ProjectSlider(props: Pick<IProject, 'id'>) {
    const initialSlide = projects.findIndex(project => project.id === props.id) ?? 0;
    const otherProjects = projects.filter(project => project.id !== props.id);

    const sliderRef = useRef<any>(null);
    useUpdateEffect(() => {
        sliderRef.current?.slickGoTo(initialSlide);
    }, [initialSlide]);

    return (
        <div className={b()}>
            <div className={b('inner')}>
                <h3>Другие проекты</h3>
                <Slider
                    infinite
                    slidesToShow={2}
                    slidesToScroll={1}
                    draggable={false}
                    initialSlide={initialSlide > otherProjects.length ? 0 : initialSlide}
                    ref={slider => {
                        sliderRef.current = slider;
                    }}
                    nextArrow={<ProjectSliderArrow direction={'right'}/>}
                    prevArrow={<ProjectSliderArrow direction={'left'}/>}
                >
                    {otherProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
