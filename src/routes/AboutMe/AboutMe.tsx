import * as React from 'react';
import bem from 'easy-bem';
import './AboutMe.scss';
import Container from 'shared/Container';
import {SizeEnum} from '../../types';
import ExternalLink from 'shared/ExternalLink';

const b = bem('AboutMe');

export default function AboutMe() {
    return (
        <article className={b()}>
            <Container size={SizeEnum.Md}>
                <section className={b('content')}>
                    <h1>Обо мне</h1>
                    <p>
                        Привет! Меня зовут Екатерина и мне 28 лет :)
                    </p>
                    <p>
                        Прежде, чем войти в программирование, я работала маркетологом, но однажды ради интереса прошла курс по JavaScript и случилась 🧡 с первого взгляда.
                        В 2019 г. я устроилась в компанию <ExternalLink href={'https://kozhindev.com/'}>KozhinDev</ExternalLink> в качестве frontend-разработчика, где и проработала в течение 2-х лет.
                    </p>
                    <p>
                        Мне сразу повезло с командой, т.к. ребята занимались сложной, нетиповой разработкой, пробовали новое и всегда стремились содержать код в чистоте. Постепенно мои проекты усложнялись, и я довольно быстро росла.
                        Затем решила пройти курс от Яндекс.Практикума <ExternalLink href={'https://practicum.yandex.ru/middle-frontend/'}>«Мидл фронтенд-разработчик»</ExternalLink> – это были непростые 5 месяцев, которые обернулись в итоге классным опытом и чувством уверенности.
                    </p>
                    <p>
                        В конце сентября 2021 г. я покинула KozhinDev, т.к. решила найти тематику проектов, близкую мне по духу.
                    </p>
                    <p>
                        В свободное время люблю почитывать книги по программированию, люблю хайкинг, бегаю на лыжах, в общем, стараюсь быть везде, где нет компьютера :)
                    </p>
                </section>
                <section className={b('content')}>
                    <h3>Связаться со мной</h3>
                    <p>
                        Пишите в телеграм <ExternalLink href={'https://telegram.me/antonovaekaterina'}>@antonovaekaterina</ExternalLink> или на почту <ExternalLink href={'mailto:antonova.ekaterina19@yandex.ru'}>antonova.ekaterina19@yandex.ru</ExternalLink>
                    </p>
                </section>
            </Container>
        </article>
    );
}
