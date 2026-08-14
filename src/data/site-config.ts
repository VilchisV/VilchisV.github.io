import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Vilchis López Victor Manuel',
    subtitle: 'Blog Personal👨‍💻',
    description: '',
    image: {
        src: '',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'Acerca de mí',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/proyectos'
        },
    ],
    footerNavLinks: [
        {
            text: 'Contacto',
            href: '/contacto'
        },

    ],
    socialLinks: [
        {
            text: 'LinkendIn',
            href: 'www.linkedin.com/in/victor-manuel-vilchis-lopez-32115a356'
        },
        {
            text: 'Github',
            href: 'www.github.com/VilchisV'
        },
    ],
    hero: {
        title: '¡Desarrollador enfocado en Frontend y base de datos!',
        text: "Egresado de Matemáticas Aplicadas y Computación (FES Acatlán, UNAM). Construyo sistemas backend en Python/Django, con bases sólidas en bases de datos relacionales, Docker y control de versiones — llevando tres proyectos web de idea a producción.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contacto'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
