import { RouteRecordRaw } from 'vue-router/dist/vue-router.mjs';

export default [
   {
      path: 'events',
      name: 'events',
      redirect: { name: 'event-list' },
      meta: {
         label: i18n.t('route.label.events'),
         icon: PrimeIcons.CALENDAR_CLOCK
      },
      children: [
         {
            path: '',
            name: 'event-list',
            components: {
               default: () => import('@/views/pages/events/index.vue')
            }
         },
         {
            path: ':id',
            name: 'event-detail',
            props: true,
            meta: {
               layout: 'main-layout',
               label: i18n.t('route.label.event_detail')
            },
            components: {
               default: () => import('@/views/pages/events/event-detail/index.vue')
            }
         }
      ]
   }
] as RouteRecordRaw[];
