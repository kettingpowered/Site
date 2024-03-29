import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { VueHeadMixin } from '@unhead/vue'
import App from './App.vue'

/* import the fontawesome core */
import { library, config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false; //This causes a CSP error
import "@fortawesome/fontawesome-svg-core/styles.css"; //we include it instead directly here.

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
                path: '/faq/',
                name: 'FAQ',
                component: () => import('@/views/Faq.vue')
            },
            {
                path: '/team/',
                name: 'Team',
                component: () => import('@/views/Team.vue')
            },
            {
                path: '/download/',
                name: 'Download',
                component: () => import('@/views/Download.vue')
            },
            //Explicitly generate page at 404. Otherwise, SSG doesn't generate a site for this.
            {
                path: '/404/',
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
        //unhead setup start
        app.config.globalProperties.unhead = {
            baseTitle: "Ketting",
            separator: " • ",
            formattedTitle: function(pageTitle) {
                return this.baseTitle + this.separator + pageTitle;
            }
        }

        app.mixin(VueHeadMixin);
        //unhead setup end

        app.component('font-awesome-icon', FontAwesomeIcon)
        //Create some global properties
        app.config.globalProperties.global = {
            url: "https://kettingpowered.org/",
            discordUrl: "https://discord.kettingpowered.org/",
            githubUrl: "https://github.com/kettingpowered/",
            imageUrl: "https://github.com/kettingpowered.png",
            downloadUrl: "https://nexus.c0d3m4513r.com/custom/forge-ketting-versions.xml",
            softwareUrl: function() {
                return this.githubUrl + "Ketting-1-20-x/";
            },
            unsupportedVersions: ["1.20.3"]
        };
    }
)