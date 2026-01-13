import { RouteRecordRaw } from 'vue-router/dist/vue-router.mjs';

export default [
   {
      path: 'events',
      name: 'events',
      meta: {
         label: i18n.t('route.label.events'),
         icon: PrimeIcons.CALENDAR_CLOCK
      },
      components: {
         default: () => import('@/views/pages/events/index.vue')
      }
   }
] as RouteRecordRaw[];
