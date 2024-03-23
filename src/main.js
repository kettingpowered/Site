import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* ICONS HERE */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab)
/* ICONS HERE */

const app = createApp(App);

//Create some global properties
app.config.globalProperties.global = {
    discordUrl: "https://discord.kettingpowered.org/",
    githubUrl: "https://github.com/kettingpowered/"
};

app.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
