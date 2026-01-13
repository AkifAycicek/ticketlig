<script setup lang="ts">
import { MenuProps } from 'primevue';

const topLinks: ComputedRef<MenuProps['model']> = computed(() => [
   {
      label: i18n.t('header.toplinks.gift_card'),
      icon: PrimeIcons.GIFT
   },
   {
      label: i18n.t('header.toplinks.monthly_magazine')
   },
   {
      label: i18n.t('header.toplinks.blog')
   },
   {
      label: i18n.t('header.toplinks.help')
   }
]);

const navLinks: ComputedRef<MenuProps['model']> = computed(() => [
   {
      label: i18n.t('header.navlinks.football')
   },
   {
      label: i18n.t('header.navlinks.music')
   },
   {
      label: i18n.t('header.navlinks.scene')
   },
   {
      label: i18n.t('header.navlinks.sport')
   },
   {
      label: i18n.t('header.navlinks.family')
   },
   {
      label: i18n.t('header.navlinks.education')
   }
]);
</script>

<template>
   <nav class="layout-topbar">
      <div class="layout-topbar-toplinks">
         <div class="max-w-[996px] flex justify-between mx-auto">
            <FormField>
               <Select
                  size="small"
                  :options="SUPPORTED_LOCALES"
                  option-label="label"
                  option-value="value"
                  :model-value="locale"
                  @change="$router.push({ params: { locale: $event.value } })"
               />
            </FormField>
            <ul class="flex gap-4 items-center">
               <li
                  class="flex gap-1 items-center"
                  v-for="(link, i) in topLinks"
                  :key="'' + link.label + i"
               >
                  <i v-if="link.icon" :class="link.icon" />
                  <span v-if="link.label" v-text="link.label" />
               </li>
            </ul>
         </div>
      </div>
      <div class="layout-topbar-nav">
         <div class="max-w-[996px] flex flex-wrap gap-4 mx-auto">
            <div class="layout-topbar-logo-container">
               <router-link to="/" class="layout-topbar-logo">
                  <span v-text="`Ticketlig`" />
               </router-link>
            </div>
            <ul class="flex gap-4 items-center min-h-[75px]">
               <li
                  class="flex gap-1 items-center py-2"
                  v-for="(link, i) in navLinks"
                  :key="'' + link.label + i"
               >
                  <i v-if="link.icon" :class="link.icon" />
                  <span v-if="link.label" v-text="link.label" />
               </li>
            </ul>
            <FormField class="ms-auto">
               <InputText :placeholder="$t('header.search.placeholder')" />
            </FormField>
         </div>
      </div>
   </nav>
</template>
<style lang="scss">
.layout-topbar {
   @apply bg-[linear-gradient(90deg,rgb(1,80,167),rgb(2,108,223),rgb(1,80,167))];
   @apply w-full self-start z-[999] text-white;

   &-toplinks {
      @apply bg-black;
   }

   &-nav {
      @apply min-h-[50px];
   }

   &-logo {
      @apply font-[500] italic text-white text-3xl;

      &-container {
         @apply p-4 flex items-center;
      }
   }
}
</style>
