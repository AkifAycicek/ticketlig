import { beforeEachMiddlewares } from './middlewares';

import { appErrorHandler } from '@/lib/appErrorHandler';
import {
   createRouter,
   createWebHistory,
   RouteLocation,
   RouterView
} from 'vue-router/dist/vue-router.mjs';
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
                        default: RouterView,
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
   const status = error?.status;

   switch (status) {
      case 401: {
         await router.replace({ name: 'auth-login' });
         break;
      }

      case 403: {
         await appErrorHandler(error);
         to.name = 'access-denied';
         await router.push(to);
         break;
      }

      default: {
         await appErrorHandler(error);
         router.push({ name: 'error' });
         break;
      }
   }
});

export default router;
