import * as React from 'react';
import bem from 'easy-bem';
import classNames from 'classnames';
import {IContainerProps} from 'shared/Container/types';
import './Container.scss';
import {SizeEnum} from '../../types';

const b = bem('Container');

export default function Container({
    className,
    children,
    size = SizeEnum.Md,
}: IContainerProps) {
    return (
        <div className={classNames(b({size}), className)}>
            {children}
        </div>
    );
}
