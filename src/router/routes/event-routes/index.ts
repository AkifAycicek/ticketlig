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
            path: ':eventId',
            name: 'event',
            props: true,
            meta: {
               label: i18n.t('route.label.event_detail')
            },
            redirect: {
               name: 'event-detail'
            },
            components: {
               default: () => import('@/views/pages/events/event/index.vue')
            },
            children: [
               {
                  path: 'event-detail',
                  name: 'event-detail',
                  components: {
                     default: () => import('@/views/pages/events/event/tabs/detail/index.vue')
                  }
               },
               {
                  path: ':eventCategoryId/seat-plan',
                  name: 'event-seat-plan',
                  meta: {
                     label: i18n.t('route.label.seat_plan')
                  },
                  components: {
                     default: () => import('@/views/pages/events/event/tabs/seat-plan/index.vue')
                  }
               },
               {
                  path: ':eventCategoryId/checkout',
                  name: 'event-checkout',
                  meta: {
                     label: i18n.t('route.label.checkout')
                  },
                  components: {
                     default: () => import('@/views/pages/events/event/tabs/checkout/Index.vue')
                  }
               }
            ]
         }
      ]
   }
] as RouteRecordRaw[];
