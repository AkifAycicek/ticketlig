<script setup lang="ts">
import { MenuItem } from 'primevue/menuitem';

const topLinks: ComputedRef<MenuItem[]> = computed(
   () =>
      [
         {
            label: i18n.t('layout.header.toplinks.gift_card'),
            icon: PrimeIcons.GIFT
         },
         {
            label: i18n.t('layout.header.toplinks.monthly_magazine')
         },
         {
            label: i18n.t('layout.header.toplinks.blog')
         },
         {
            label: i18n.t('layout.header.toplinks.help')
         }
      ] as MenuItem[]
);

const navLinks: ComputedRef<MenuItem[]> = computed(
   () =>
      [
         {
            label: i18n.t('layout.header.navlinks.football')
         },
         {
            label: i18n.t('layout.header.navlinks.music')
         },
         {
            label: i18n.t('layout.header.navlinks.scene')
         },
         {
            label: i18n.t('layout.header.navlinks.sport')
         },
         {
            label: i18n.t('layout.header.navlinks.family')
         },
         {
            label: i18n.t('layout.header.navlinks.education')
         }
      ] as MenuItem[]
);

const topLinksMenu = ref();
const navLinksMenu = ref();
</script>

<template>
   <nav class="layout-topbar">
      <div class="layout-topbar-toplinks">
         <div class="max-w-[996px] flex gap-2 justify-between items-center mx-auto">
            <FormField>
               <Select
                  size="small"
                  :options="SUPPORTED_LOCALES"
                  option-label="label"
                  option-value="value"
                  :model-value="locale"
                  :placeholder="$t('layout.topbar.select_language')"
                  @change="$router.push({ params: { locale: $event.value } })"
               />
            </FormField>

            <Button
               class="lg:!hidden ms-auto !bg-slate-800 !border-slate-700"
               type="button"
               icon="pi pi-ellipsis-v"
               @click="(e) => topLinksMenu.toggle(e)"
               aria-haspopup="true"
               aria-controls="overlay_menu"
            />
            <Menu ref="topLinksMenu" id="overlay_menu" :model="topLinks" :popup="true" />
            <ul class="hidden lg:flex gap-4 items-center">
               <RouterLink
                  custom
                  to="#"
                  v-slot="{ navigate, href }"
                  v-for="(link, i) in topLinks"
                  :key="'' + link.label + i"
               >
                  <a :href>
                     <li class="flex gap-1 items-center" @click="navigate">
                        <i v-if="link.icon" :class="link.icon" />
                        <span v-if="link.label" v-text="link.label" />
                     </li>
                  </a>
               </RouterLink>
            </ul>
         </div>
      </div>
      <div class="layout-topbar-nav">
         <div class="max-w-[996px] flex flex-wrap gap-4 items-center mx-auto">
            <div class="layout-topbar-logo-container">
               <router-link to="/" class="layout-topbar-logo">
                  <span v-text="`Ticketlig`" />
               </router-link>
            </div>

            <Button
               class="lg:!hidden"
               type="button"
               severity="primary"
               icon="pi pi-ellipsis-v"
               @click="(e) => navLinksMenu.toggle(e)"
               aria-haspopup="true"
               aria-controls="overlay_menu"
            />
            <Menu ref="navLinksMenu" id="overlay_menu" :model="navLinks" :popup="true" />
            <ul class="hidden lg:flex min-h-[75px] !h-full">
               <RouterLink
                  custom
                  to="#"
                  v-slot="{ navigate, href }"
                  v-for="(link, i) in navLinks"
                  :key="'' + link.label + i"
               >
                  <a :href class="!min-h-full">
                     <li
                        class="flex gap-1 !h-full items-center p-2 hover:bg-slate-900/25"
                        @click="navigate"
                     >
                        <i v-if="link.icon" :class="link.icon" />
                        <span v-if="link.label" v-text="link.label" />
                     </li>
                  </a>
               </RouterLink>
            </ul>
            <InputGroup class="m-2 ms-auto flex-1 min-w-fit max-w-md">
               <InputText
                  class="w-full"
                  :placeholder="$t('layout.header.search_activity_venue_or_actors.placeholder')"
               />
               <InputGroupAddon><i :class="PrimeIcons.SEARCH" /></InputGroupAddon>
            </InputGroup>
         </div>
      </div>
   </nav>
</template>
<style lang="scss">
.layout-topbar {
   @apply bg-[linear-gradient(90deg,rgb(1,80,167),rgb(2,108,223),rgb(1,80,167))];
   @apply w-full self-start z-[999] text-white;

   &-toplinks {
      @apply bg-black p-2 px-8;
   }

   &-nav {
      @apply min-h-[50px] px-8;
   }

   &-logo {
      @apply font-[500] italic text-white text-3xl;

      &-container {
         @apply p-4 flex items-center;
      }
   }
}
</style>
