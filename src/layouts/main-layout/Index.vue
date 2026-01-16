<script lang="ts" setup>
useLayout();

const route = useRoute();

watch(
   () => route.hash,
   async (hash) => {
      try {
         if (_isEmpty(hash)) return;
         setTimeout(() => document.querySelector(route.hash)?.scrollIntoView(), 1000);
      } catch (error) {
         console.warn(error);
      }
   },
   { immediate: true, once: true }
);

watch(
   () => route.hash,
   (hash) => {
      try {
         if (_isEmpty(hash)) return;
         setTimeout(() => document.querySelector(route.hash)?.scrollIntoView(), 200);
      } catch (error) {
         console.warn(error);
      }
   }
);
</script>

<template>
   <div class="layout__wrapper">
      <main class="layout__main">
         <RouterView v-slot="{ Component }" name="layout-topbar">
            <template v-if="Component">
               <Suspense>
                  <component :is="Component" />
               </Suspense>
            </template>
         </RouterView>
         <div class="content__body">
            <RouterView v-slot="{ Component }" name="content-header">
               <div v-if="Component" class="content__header">
                  <Suspense>
                     <component :is="Component" />
                  </Suspense>
               </div>
            </RouterView>

            <RouteLoader />

            <RouterView v-slot="{ Component }" name="content-footer">
               <div v-if="Component" class="content__footer">
                  <Suspense>
                     <component :is="Component" />
                  </Suspense>
               </div>
            </RouterView>
         </div>
      </main>
      <RouterView v-slot="{ Component }" name="layout-footer">
         <template v-if="Component">
            <Suspense>
               <component :is="Component" />
            </Suspense>
         </template>
      </RouterView>
   </div>
</template>

<style lang="scss">
.layout {
   &__wrapper {
      @apply min-w-[inherit] min-h-[inherit] overflow-auto flex flex-col gap-4;
   }

   &__main {
      @apply flex-1 flex flex-col;
   }
}

.content {
   &__body {
      @apply max-w-[996px] flex-1 w-full flex flex-col mx-auto p-8;
   }

   &__header {
      @apply p-4 mb-4 flex gap-2;
   }

   &__footer {
      @apply p-4;
   }
}
</style>
