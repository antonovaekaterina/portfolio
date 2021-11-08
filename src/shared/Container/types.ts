import {PropsWithChildren} from 'react';
import {SizeEnum} from '../../types';

export interface IContainerProps extends PropsWithChildren<any>{
    size: SizeEnum,
    className?: string
}
