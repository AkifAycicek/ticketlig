import { i18NPlugin } from '@/plugins/i18n';
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { createVueApp } from './app';

import '@/assets/style/styles.scss';
import '@/assets/style/tailwind.css';
import { appErrorHandler } from '@/lib/app-error-handler';
import FocusTrap from 'primevue/focustrap';
import KeyFilter from 'primevue/keyfilter';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import router from './router';

const g = globalThis as any;

if (!g.__VUE_APP__) {
   const app = createVueApp();
   g.__VUE_APP__ = app;

   app.config.errorHandler = appErrorHandler;

   app.use(router);
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

   router.isReady().then(() => {
      app.mount('#app');
   });
}
