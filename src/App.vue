<template>
   <Toast />
   <RouterView v-slot="{ Component }">
      <KeepAlive>
         <component :is="Component" />
      </KeepAlive>
   </RouterView>
</template>

<style>
#app {
   @apply min-w-[100dvw] min-h-[100dvh] overflow-hidden flex items-start;
}
</style>
