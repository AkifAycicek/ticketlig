import App from './App.vue';

import { i18NPlugin } from '@/plugins/i18n';
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import '@/assets/style/styles.scss';
import '@/assets/style/tailwind.css';
import { appErrorHandler } from '@lib/appErrorHandler';
import FocusTrap from 'primevue/focustrap';
import KeyFilter from 'primevue/keyfilter';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import router from './router';

export const app = createApp(App);

app.config.errorHandler = appErrorHandler;

app.use(i18NPlugin);
app.use(PrimeVue, {
   ripple: true,
   theme: {
      preset: Aura,
      options: {
         darkModeSelector: '.dark',
         order: 'tailwind-base, primevue, tailwind-utilities'
      }
   }
});

app.use(ToastService);
app.directive('keyfilter', KeyFilter);
app.directive('focustrap', FocusTrap);
app.directive('ripple', Ripple);
app.directive('tooltip', Tooltip);
app.use(router);

app.mount('#app');
