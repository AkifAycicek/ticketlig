<template>
   <footer class="layout-footer">
      <div class="layout-footer__container">
         <div class="layout-footer__col">
            <h3 class="layout-footer__title" v-text="$t('layout.footer.help.title')" />
            <ul class="layout-footer__list">
               <li class="layout-footer__item" v-text="$t('layout.footer.help.faq')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.help.sales_channels')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.help.gift_card')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.help.insurance')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.help.account')" />
            </ul>
         </div>

         <div class="layout-footer__col">
            <h3 class="layout-footer__title" v-text="$t('layout.footer.about.title')" />
            <ul class="layout-footer__list">
               <li class="layout-footer__item" v-text="$t('layout.footer.about.who_we_are')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.about.policy')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.about.media')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.about.contact')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.about.live_nation')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.about.ticket_story')" />
               <li
                  class="layout-footer__item"
                  v-text="$t('layout.footer.about.information_society')"
               />
            </ul>
         </div>

         <div class="layout-footer__col">
            <h3 class="layout-footer__title" v-text="$t('layout.footer.work.title')" />
            <ul class="layout-footer__list">
               <li class="layout-footer__item" v-text="$t('layout.footer.work.your_tickets')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.work.advertise')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.work.career')" />
               <li class="layout-footer__item" v-text="$t('layout.footer.work.affiliate')" />
            </ul>
         </div>

         <div class="layout-footer__col layout-footer__col--social">
            <div class="layout-footer__block">
               <h3 class="layout-footer__title" v-text="$t('layout.footer.follow.title')" />
               <div class="layout-footer__socials">
                  <i :class="PrimeIcons.INSTAGRAM" class="layout-footer__icon"></i>
                  <i :class="PrimeIcons.FACEBOOK" class="layout-footer__icon"></i>
                  <i :class="PrimeIcons.TWITTER" class="layout-footer__icon"></i>
                  <i :class="PrimeIcons.LINKEDIN" class="layout-footer__icon"></i>
                  <i :class="PrimeIcons.YOUTUBE" class="layout-footer__icon"></i>
               </div>
            </div>
            <div class="layout-footer__block">
               <h3 class="layout-footer__title" v-text="$t('layout.footer.apps.title')" />
               <div class="layout-footer__apps">
                  <i
                     :class="PrimeIcons.APPLE"
                     class="layout-footer__icon layout-footer__icon--lg"
                  ></i>
                  <i
                     :class="PrimeIcons.ANDROID"
                     class="layout-footer__icon layout-footer__icon--lg"
                  ></i>
               </div>
            </div>
         </div>
      </div>

      <div class="layout-footer__bottom">
         <div class="layout-footer__policies">
            <h4 class="layout-footer__policies-title" v-text="$t('layout.footer.policies.title')" />
            <p class="layout-footer__policy" v-text="$t('layout.footer.policies.contracts')" />
            <p class="layout-footer__policy" v-text="$t('layout.footer.policies.cookies')" />
            <p class="layout-footer__policy" v-text="$t('layout.footer.policies.preferences')" />
            <p class="layout-footer__policy" v-text="$t('layout.footer.policies.ttk')" />
            <p class="layout-footer__policy" v-text="$t('layout.footer.policies.privacy')" />
         </div>
         <div class="layout-footer__copyright">
            © 2026 Ticketlig. {{ $t('flayout.ooter.rights') }}
         </div>
      </div>
   </footer>
</template>

<style lang="scss" scoped>
.layout-footer {
   @apply bg-slate-900 max-w-[inherit] text-slate-200 px-8 py-16;

   &__container {
      @apply max-w-[996px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12;
   }
   &__col {
      @apply space-y-4;
   }
   &__col--social {
      @apply space-y-6;
   }

   &__title {
      @apply text-sm font-semibold tracking-widest text-white mb-4 border-b border-slate-600 pb-2;
   }
   &__list {
      @apply space-y-2;
   }
   &__item {
      @apply cursor-pointer hover:text-white transition;
   }

   &__block {
      @apply space-y-4;
   }
   &__socials {
      @apply flex gap-4 text-2xl;
   }
   &__apps {
      @apply flex gap-4 text-3xl;
   }
   &__icon {
      @apply cursor-pointer hover:text-white transition;
   }
   &__icon--lg {
      @apply text-3xl;
   }

   &__bottom {
      @apply border-t max-w-[996px] mx-auto border-slate-700 mt-12 pt-6 text-sm grid grid-cols-1 md:grid-cols-2 gap-4;
   }
   &__policies {
      @apply space-y-2;
   }
   &__policies-title {
      @apply font-semibold;
   }
   &__policy {
      @apply hover:text-white cursor-pointer transition;
   }
   &__copyright {
      @apply text-right self-end;
   }
}
</style>
