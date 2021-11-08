import * as React from 'react';
import bem from 'easy-bem';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import Container from 'shared/Container';
import {SizeEnum} from '../../types';
import avatar from 'assets/images/avatar.png';
import routes from 'routes/index';
import {Link} from 'react-router-dom';

const b = bem('Header');

export default function Header() {
    return (
        <header className={b()}>
            <Container
                size={SizeEnum.Md}
                className={b('container')}
            >
                <Link to={'/portfolio'} className={b('profile')}>
                    <img src={avatar} className={b('profile-avatar')} alt={'Photo'}/>
                    <div className={b('profile-content')}>
                        <p className={b('profile-name')}>
                            Антонова Екатерина
                        </p>
                        <p className={classNames(b('profile-description'), 'description')}>
                            frontend-разработчик
                        </p>
                    </div>
                </Link>
                <nav>
                    {routes.filter(route => route.isNavVisible !== false).map(route => (
                        <NavLink
                            key={route.id}
                            to={route.path as string}
                            className={classNames(b('nav-link'), 'nav')}
                            activeClassName={b('nav-link--selected')}
                        >
                            {route.label}
                        </NavLink>
                    ))}
                </nav>
            </Container>
        </header>
    );
}
