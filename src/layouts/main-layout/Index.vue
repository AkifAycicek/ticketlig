<script lang="ts" setup>
useLayout();
</script>

<template>
   <div class="layout-wrapper">
      <main class="layout-main">
         <RouterView v-slot="{ Component }" name="layout-topbar">
            <Transition
               appear
               enter-active-class="animate-fadeinup animate-fill-forwards animate-ease-out animate-duration-[var(--transition-duration)]"
               leave-active-class="animate-fadeoutup animate-fill-forwards animate-ease-in animate-duration-[var(--transition-duration)]"
               mode="out-in"
            >
               <template v-if="Component">
                  <Suspense>
                     <component :is="Component" />
                  </Suspense>
               </template>
            </Transition>
         </RouterView>
         <div class="max-w-[996px] flex-1 w-full flex flex-col mx-auto p-8">
            <RouterView v-slot="{ Component }" name="page-header">
               <div v-if="Component" class="p-4 mb-4 flex gap-2">
                  <Suspense>
                     <component :is="Component" />
                  </Suspense>
               </div>
            </RouterView>

            <RouteLoader />

            <RouterView v-slot="{ Component }" name="page-footer">
               <div v-if="Component" class="p-4">
                  <Suspense>
                     <component :is="Component" />
                  </Suspense>
               </div>
            </RouterView>
         </div>
      </main>
      <RouterView v-slot="{ Component }" name="layout-footer">
         <Transition
            appear
            enter-active-class="animate-fadeindown animate-fill-forwards animate-ease-out animate-duration-[var(--transition-duration)]"
            leave-active-class="animate-fadeoutdown animate-fill-forwards animate-ease-in animate-duration-[var(--transition-duration)]"
            mode="out-in"
         >
            <footer v-if="Component" class="layout-footer">
               <Suspense>
                  <component :is="Component" />
               </Suspense>
            </footer>
         </Transition>
      </RouterView>
   </div>
</template>

<style lang="scss">
.layout-wrapper {
   @apply min-w-[inherit] min-h-[inherit] overflow-auto flex flex-col gap-4;
}

.layout-main {
   @apply flex-1 flex flex-col;
}
</style>
