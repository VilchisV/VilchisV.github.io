import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: '',
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
            text: 'Quien soy',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Sobre mí',
            href: '/about'
        },
    ],
    footerNavLinks: [
        {
            text: 'Contacto',
            href: '/contact'
        },

    ],
    socialLinks: [

    ],
    hero: {
        title: '¡Desarrollador enfocado en Frontend y base de datos!',
        text: "Egresado de Matemáticas Aplicadas y Computación (FES Acatlán, UNAM). Construyo sistemas backend en Python/Django, con bases sólidas en bases de datos relacionales, Docker y control de versiones — llevando tres proyectos web de idea a producción.",
        image: {
            src: hero,
            alt: ''
        },
        actions: [
            {
                text: 'Contactame',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: '',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
