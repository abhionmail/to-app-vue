import "./assets/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/main.css';

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faPen, faFloppyDisk, faRectangleXmark, faSquarePlus} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faPen, faFloppyDisk, faRectangleXmark, faSquarePlus)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
