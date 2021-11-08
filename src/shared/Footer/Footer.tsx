import * as React from 'react';
import bem from 'easy-bem';
import './Footer.scss';
import ExternalLink from 'shared/ExternalLink';
import Container from 'shared/Container';
import {SizeEnum} from '../../types';

const b = bem('Footer');

export default function Footer() {
    return (
        <footer className={b()}>
            <Container
                size={SizeEnum.Md}
                className={b('inner')}
            >
                Написать мне в  <ExternalLink
                    href={'https://telegram.me/antonovaekaterina'}
                    className={b('link')}
                >
                    Telegram
                </ExternalLink>
            </Container>
        </footer>
    );
}
