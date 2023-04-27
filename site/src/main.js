import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareGithub, faLinkedin, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Don't forget to import the CSS file

library.add(faSquareGithub, faLinkedin, faSquareInstagram, faSquareTwitter, faLaptopCode, faBars);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.directive('tooltip', {
  mounted(el, binding) {
    tippy(el, {
      content: binding.value,
      animation: 'shift-away',
      placement: 'right', // You can customize the tooltip animation
    });
  },
});
app.mount('#app');
