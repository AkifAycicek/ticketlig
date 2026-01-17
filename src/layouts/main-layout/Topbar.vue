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
      <div class="layout-topbar__toplinks">
         <div class="layout-topbar__container">
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
               class="layout-topbar__menu-button"
               type="button"
               icon="pi pi-ellipsis-v"
               @click="(e) => topLinksMenu.toggle(e)"
               aria-haspopup="true"
               aria-controls="overlay_menu"
            />
            <Menu ref="topLinksMenu" id="overlay_menu" :model="topLinks" :popup="true" />
            <ul class="layout-topbar__toplinks-list">
               <RouterLink
                  custom
                  to="#"
                  v-slot="{ navigate, href }"
                  v-for="(link, i) in topLinks"
                  :key="'' + link.label + i"
               >
                  <a :href>
                     <li class="layout-topbar__toplink-item" @click="navigate">
                        <i v-if="link.icon" :class="link.icon" />
                        <span v-if="link.label" v-text="link.label" />
                     </li>
                  </a>
               </RouterLink>
            </ul>
         </div>
      </div>
      <div class="layout-topbar__nav">
         <div class="layout-topbar__container">
            <div class="layout-topbar__logo-container">
               <router-link to="/" class="layout-topbar__logo">
                  <span v-text="`Ticketlig`" />
               </router-link>
               <Button
                  class="layout-topbar__menu-button"
                  type="button"
                  severity="primary"
                  icon="pi pi-ellipsis-v"
                  @click="(e) => navLinksMenu.toggle(e)"
                  aria-haspopup="true"
                  aria-controls="overlay_menu"
               />
            </div>
            <Menu ref="navLinksMenu" id="overlay_menu" :model="navLinks" :popup="true" />
            <ul class="layout-topbar__nav-links">
               <RouterLink
                  custom
                  to="#"
                  v-slot="{ navigate, href }"
                  v-for="(link, i) in navLinks"
                  :key="'' + link.label + i"
               >
                  <a :href class="layout-topbar__nav-link">
                     <li class="layout-topbar__nav-link-item" @click="navigate">
                        <i v-if="link.icon" :class="link.icon" />
                        <span v-if="link.label" v-text="link.label" />
                     </li>
                  </a>
               </RouterLink>
            </ul>
            <InputGroup class="layout-topbar__search">
               <InputText
                  class="layout-topbar__search-input"
                  :placeholder="$t('layout.header.search_activity_venue_or_actors.placeholder')"
               />
               <InputGroupAddon><Button :icon="PrimeIcons.SEARCH" /></InputGroupAddon>
            </InputGroup>
         </div>
      </div>
   </nav>
</template>
<style lang="scss">
.layout-topbar {
   @apply bg-[linear-gradient(90deg,rgb(1,80,167),rgb(2,108,223),rgb(1,80,167))];
   @apply w-full self-start z-[999] text-white shadow-xl;

   &__toplinks {
      @apply bg-black p-2 px-8;
   }

   &__nav {
      @apply min-h-[50px] px-8;
   }

   &__container {
      @apply max-w-[996px] flex flex-wrap gap-2 justify-between items-center mx-auto;
   }

   &__logo-container {
      @apply p-4 flex gap-4 items-center;
   }

   &__logo {
      @apply font-[500] italic text-white text-3xl;
   }

   &__menu-button {
      @apply lg:!hidden ms-auto !bg-slate-800 !border-slate-700;
   }

   &__toplinks-list {
      @apply hidden lg:flex gap-4 items-center;
   }

   &__toplink-item {
      @apply flex gap-1 items-center;
   }

   &__nav-links {
      @apply hidden lg:flex min-h-[75px] !h-full;
   }

   &__nav-link {
      @apply min-h-full;
   }

   &__nav-link-item {
      @apply flex gap-1 !h-full items-center p-2 hover:bg-slate-900/25;
   }

   &__search {
      @apply m-2 ms-auto flex-1 min-w-fit max-w-md;
   }

   &__search-input {
      @apply w-full m-2 ms-auto;
   }
}
</style>
