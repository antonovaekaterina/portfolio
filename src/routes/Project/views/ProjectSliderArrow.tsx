import SVG from 'react-inlinesvg';
import arrow from '../../../assets/images/arrow.svg';
import * as React from 'react';
import bem from 'easy-bem';
import './ProjectSliderArrow.scss';

const b = bem('ProjectSliderArrow');

export default function ProjectSliderArrow({onClick, direction}: any) {
    return (
        <div
            className={b({direction})}
            onClick={onClick}
        >
            <SVG src={arrow}/>
        </div>
    );
}
