import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* ICONS HERE */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab)

export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    {
        routes: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: '/faq',
                name: 'FAQ',
                component: () => import('@/views/Faq.vue')
            },
            {
                path: '/team',
                name: 'Team',
                component: () => import('@/views/Team.vue')
            },
            {
                path: '/download',
                name: 'Download',
                component: () => import('@/views/Download.vue')
            },
            //Explicitly generate page at 404. Otherwise, SSG doesn't generate a site for this.
            {
                path: '/404',
                name: 'NotFound',
                component: () => import('@/views/NotFound.vue')
            },
            {
                path: '/:catchAll(.*)',
                name: 'NotFound',
                component: () => import('@/views/NotFound.vue')
            }
        ],
        base: import.meta.env.BASE_URL,
    },
    // function to have custom setups
    ({ app, router, routes, isClient, initialState }) => {
        app.component('font-awesome-icon', FontAwesomeIcon)
        //Create some global properties
        app.config.globalProperties.global = {
            discordUrl: "https://discord.kettingpowered.org/",
            githubUrl: "https://github.com/kettingpowered/",
            downloadUrl: "https://nexus.c0d3m4513r.com/custom/forge-ketting-versions.xml",
            softwareUrl: function() {
                return this.githubUrl + "Ketting-1-20-x/";
            },
            unsupportedVersions: ["1.20.3"]
        };

        //Discord Roles and their colors
        app.config.globalProperties.discordRoles = {
            "Owner": "#660000",
            "Admin": "#ffcc00",
            "Staff": "#ff6633",
            "Helper": "#ff3333",
            "Contributor": "#33cc99",
        }
    }
)