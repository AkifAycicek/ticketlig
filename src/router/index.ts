import { beforeEachMiddlewares } from './middlewares';

import RouteLoader from '@/components/layout/RouteLoader.vue';
import { appErrorHandler } from '@/lib/app-error-handler';
import { createRouter, createWebHistory, RouteLocation } from 'vue-router/dist/vue-router.mjs';
import eventRoutes from './routes/event-routes';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: `/:locale?`,
         children: [
            {
               path: ``,
               component: () => import('@/layouts/AppLayout.vue'),
               children: [
                  {
                     path: '',
                     meta: {
                        layout: 'main-layout'
                     },
                     redirect: { name: 'events' },
                     components: {
                        default: RouteLoader,
                        'content-header': () => import('@components/layout/AppBreadcrumb.vue'),
                        'layout-topbar': () => import('@/layouts/main-layout/Topbar.vue'),
                        'layout-footer': () => import('@/layouts/main-layout/Footer.vue')
                     },
                     children: [...eventRoutes]
                  },
                  {
                     path: '',
                     meta: {
                        layout: 'main-layout'
                     },
                     children: [
                        {
                           path: 'error',
                           name: 'error',
                           meta: {
                              label: i18n.t('route.label.error')
                           },
                           components: {
                              default: () => import('@/views/pages/Error.vue'),
                              'layout-topbar': () => import('@/layouts/main-layout/Topbar.vue'),
                              'layout-footer': () => import('@/layouts/main-layout/Footer.vue')
                           }
                        },
                        {
                           path: `:pathMatch(.*)*`,
                           name: 'notfound',
                           meta: {
                              label: i18n.t('route.label.notfound')
                           },
                           components: {
                              default: () => import('@/views/pages/NotFound.vue'),
                              'layout-topbar': () => import('@/layouts/main-layout/Topbar.vue'),
                              'layout-footer': () => import('@/layouts/main-layout/Footer.vue')
                           }
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
});

beforeEachMiddlewares.forEach((middleware) => {
   router.beforeEach(middleware);
});

router.onError(async (error: any, to: RouteLocation) => {
   await appErrorHandler(error);
});

export default router;
