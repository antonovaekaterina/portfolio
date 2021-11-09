import {IProject} from '../types';
import gocPreview from './images/goc/preview.jpg';
import gocMap from './images/goc/map.jpg';
import gocDeck from './images/goc/deck.jpg';
import gocBooking from './images/goc/booking.jpg';
import gocRoute from './images/goc/route.jpg';
import gocIndex from './images/goc/index.jpg';
import gocCompanies from './images/goc/companies.jpg';
import rpgemPreview from './images/rpgem/preview.jpg';
import kozhindevPreview from './images/kozhindev/preview.jpg';
import kozhindevCase from './images/kozhindev/case.jpg';
import kozhindevEvents from './images/kozhindev/events.jpg';
import kozhindevLang from './images/kozhindev/lang.jpg';
import maconPreview from './images/macon/preview.jpg';
import eoraPreview from './images/eora/preview.jpg';
import steroidsPreview from './images/steroids/preview.jpg';
import steroidsSsr from './images/steroids/ssr.jpg';
import steroidsUi from './images/steroids/ui.jpg';
import leaksPreview from './images/leaksdb/preview.jpg';
import cakePreview from './images/cake/preview.jpg';
import yandexPreview from './images/yandex/preview.jpg';
import yandexChat from './images/yandex/chat.jpg';
import yandexPacman from './images/yandex/pacman.jpg';

const projects: IProject[] = [
    {
        id: 'leaksdb',
        team: 'KozhinDev',
        stack: ['Typescript', 'Node.js', 'Clickhouse', 'Docker', 'Webpack'],
        time: '09.2021',
        title: 'Leaks DB',
        shortDescription: 'Парсинг файлов и загрузка данных в Clickhouse',
        preview: leaksPreview,
        description: 'Разработка приложения на Node.js, которое потоком читает большие csv/txt/sql/json файлы, парсит их и загружает нужные данные в Clickhouse.',
    },
    {
        id: 'eora',
        team: 'KozhinDev',
        stack: ['Typescript', 'React', 'MobX', 'Highcharts', 'SCSS', 'Webpack'],
        title: 'EORA',
        shortDescription: 'Админка для игры с лутбоксами',
        preview: eoraPreview,
        description: 'Разработка клиентской части админки. Интерфейс включал в себя таблицы и графики для отображения вероятностей выпадения вещей из лутбоксов.',
        time: '08.2021',
    },
    {
        id: 'steroids',
        externalLink: 'https://github.com/steroids/react/blob/HEAD/docs/index.md',
        team: 'KozhinDev',
        time: '05.2021-08.2021',
        stack: ['Typescript', 'React', 'Redux', 'SCSS', 'Node.js', 'Express', 'Webpack'],
        title: 'Steroids',
        preview: steroidsPreview,
        shortDescription: 'Фреймворк для быстрого создания SPA на React',
        description: 'Практически все приложения в команде KozhinDev создаются на базе Steroids. Это open-source фреймворк, который позволяет быстро разрабатывать SPA-приложения на React. Он предлагает свою архитектуру и содержит набор готовых UI-компонентов.',
        tasks: [
            {
                title: 'Разработка модуля для SSR',
                externalLink: 'https://github.com/steroids/ssr',
                description: ['Node.js модуль для серверного рендеринга React-приложения с предварительной загрузкой Redux-стора и данных с бэкенда', 'Работает в связке со Steroids'],
                img: steroidsSsr,
            },
            {
                title: 'Добавление UI-компонентов',
                description: ['Таблица ключ-значение – content/Detail', 'Поле для загрузки и обрезки изображения – form/ImageField', 'Рекапча – form/reCaptchaField'],
                externalLink: 'https://github.com/steroids/react/tree/master/src/ui',
                img: steroidsUi,
            },
            {
                title: 'Перевод классовых React-компонентов на функциональные',
            },
            {
                title: 'Составление описаний к пропсам компонентов',
            },
        ],
    },
    {
        id: 'cakecrypt',
        team: 'KozhinDev',
        time: '06.2021',
        stack: ['Typescript', 'Node.js', 'NestJS', 'Postgres', 'React', 'Redux', 'Css-in-JS'],
        title: 'Cake Crypt',
        preview: cakePreview,
        shortDescription: 'Криптовалютная площадка',
        description: 'Доработка фронтенда и бэкенда для криптовалютной площадки.',
    },
    {
        id: 'goc',
        title: 'Golden Cruises',
        shortDescription: 'Агрегатор круизных путешествий',
        team: 'KozhinDev',
        description: 'Участие в разработке клиентской части SPA-приложения, которое позволяет выбрать, забронировать и оплатить круиз в любую точку мира. Сайт занял 3 место в рейтинге рунета в категории «Туризм» в 2021 г.',
        time: '02.2020-09.2020',
        stack: ['React', 'Redux', 'SCSS', 'Webpack'],
        preview: gocPreview,
        externalLink: 'https://goldencruises.es/ru',
        tasks: [
            {
                title: 'Главная страница',
                externalLink: 'https://goldencruises.es/ru',
                img: gocIndex,
            },
            {
                title: 'Вкладка с маршрутом',
                externalLink: 'https://goldencruises.es/ru/catalog/6846041/info/route',
                img: gocRoute,
            },
            {
                title: 'Вкладка с палубами',
                externalLink: 'https://goldencruises.es/ru/catalog/6846041/info/decks',
                img: gocDeck,
            },
            {
                title: 'Бронирование и оплата круиза',
                externalLink: 'https://goldencruises.es/ru/catalog/11556911/booking',
                img: gocBooking,
            },
            {
                title: 'Анимация карточек и маршрутов на карте',
                externalLink: 'https://goldencruises.es/ru/catalog/map?regionCode=NEU',
                img: gocMap,
            },
            {
                title: 'Каталог и страницы компаний',
                externalLink: 'https://goldencruises.es/ru/companies',
                img: gocCompanies,
            },
        ],
    },
    {
        id: 'rpgem',
        title: 'РП ГЭМ',
        description: 'Разработка клиентской части SPA-приложения для компании по ремонту горнодобывающей техники.',
        stack: ['Typescript', 'React', 'Redux', 'SCSS', 'Webpack'],
        externalLink: 'https://rpgem.ru/',
        team: 'KozhinDev',
        shortDescription: 'Сайт-визитка для ремонтной компании',
        time: '10.2020-11.2020',
        preview: rpgemPreview,
    },
    {
        id: 'kozhindev',
        title: 'KozhinDev',
        team: 'KozhinDev',
        externalLink: 'https://kozhindev.com/',
        shortDescription: 'Сайт-визитка для команды по разработке',
        description: 'Участие в разработке SPA-приложения для команды KozhinDev.',
        stack: ['Typescript', 'React', 'Redux', 'SCSS', 'Webpack'],
        time: '12.2020-08.2021',
        preview: kozhindevPreview,
        tasks: [
            {
                title: 'Страница кейса',
                externalLink: 'https://kozhindev.com/projects/st-nicholas',
                img: kozhindevCase,
            },
            {
                title: 'Страница с событиями',
                externalLink: 'https://kozhindev.com/events',
                img: kozhindevEvents,
            },
            {
                title: 'Добавление мультиязычности',
                img: kozhindevLang,
            },
            {
                title: 'Настройка SSR',
            },
        ],
    },
    {
        id: 'macon',
        team: 'KozhinDev',
        stack: ['React', 'Redux', 'SCSS', 'Webpack'],
        time: '09.2019-02.2020',
        title: 'Macon',
        preview: maconPreview,
        externalLink: 'https://macon-realty.ru/',
        shortDescription: 'Сайт-визитка для консалтинговой компании',
        description: 'Разработка клиентской части SPA-приложения для консалтинговой компании.',
    },
    {
        id: 'yandex',
        stack: ['Typescript', 'React', 'Redux', 'Webpack', 'SCSS', 'Express', 'MongoDB', 'Docker', 'Node.js', 'Heroku', 'Canvas', 'ServiceWorkers'],
        team: 'Студенты Яндекс.Практикума',
        time: '09.2020-05.2021',
        title: 'Курс «Мидл фронтенд-разработчик»',
        shortDescription: 'Игра на React и чат на JavaScript',
        preview: yandexPreview,
        description: 'Реализовала 2 проекта в рамках курса «Мидл фронтенд-разработчик» от Яндекс.Практикума.',
        tasks: [
            {
                title: 'Pacman на React',
                externalLink: 'https://github.com/Geneva-yandex/Pacman/tree/dev',
                img: yandexPacman,
                description: ['Командная разработка', 'Игра реализована на Canvas', 'Подключены Service Workers для игры оффлайн', 'Добавлена форма обратной связи с сохранением данных в Mongo'],
            },
            {
                title: 'Чат на JavaScript',
                externalLink: 'https://github.com/antonovaekaterina/mf.messenger.praktikum.yandex',
                img: yandexChat,
                description: ['Самостоятельный проект', 'Написан на чистом JavaScript, не используются фреймворки', 'До подключения Webpack использовались ES6 модули', 'Деплой на Heroku'],
            },
        ],
    },
];

export default projects;
