import { useNavigatorLanguage } from '@vueuse/core';
import dayjs from 'dayjs';
import Validator from 'validatorjs';
import { computed, nextTick, watch } from 'vue';
import { createI18n } from 'vue-i18n';

export const dayjsLocales = {
   en: () => import('dayjs/locale/en'),
   tr: () => import('dayjs/locale/tr')
};

export const primeLocales = {
   en: () => import('primelocale/en.json'),
   tr: () => import('primelocale/tr.json')
};

const { language: navigatorLanguage } = useNavigatorLanguage();

export async function loadLocaleMessages(locale, i18n = i18NPlugin.global) {
   try {
      const messages = await import(`./locales/${locale}/index.json`);
      i18n.setLocaleMessage(locale, messages.default);

      // Dynamically load package locales
      const loadDayjsLocale = dayjsLocales[locale];
      const loadPrimeLocales = primeLocales[locale];

      try {
         if (loadDayjsLocale) {
            await loadDayjsLocale();
            dayjs.locale(locale);
         } else {
            console.warn(`dayjs locale '${locale}' not found, falling back to 'en'`);
            dayjs.locale(i18NPlugin.global.fallbackLocale.value);
         }
      } catch (error) {
         console.warn(`Failed to load dayjs locale '${locale}':`, error);
      }

      try {
         if (loadPrimeLocales) {
            const primevue = (await import('@/main'))?.app?.config?.globalProperties?.$primevue;
            const primeLocale = (await loadPrimeLocales())?.default;
            _merge(primevue?.config?.locale, primeLocale?.[locale]);
         } else {
            console.warn(`primevue locale '${locale}' not found, falling back to 'en'`);
         }
      } catch (error) {
         console.warn(`Failed to load primevue locale '${locale}':`, error);
      }

      try {
         Validator.useLang(locale);
      } catch (error) {
         console.warn(`validator locale '${locale}' not found, falling back to 'en'`);
         Validator.useLang('en');
      }

      return {
         [locale]: messages
      };
   } catch (error) {
      console.warn(error);
   }
}

export const guessUserLocale = computed(() => {
   if (typeof window !== 'undefined')
      return localStorage?.getItem?.('app_lang') || navigatorLanguage.value.slice(0, 2) || 'en';
   return 'en';
});

export const i18NPlugin = createI18n({
   legacy: false,
   locale: guessUserLocale.value,
   fallbackLocale: 'en',
   globalInjection: true,
   missingWarn: false,
   fallbackWarn: false
});

export const SUPPORTED_LOCALES = computed(() => [
   { label: i18NPlugin.global.t('app_config.language.option.turkish'), value: 'tr' },
   { label: i18NPlugin.global.t('app_config.language.option.english'), value: 'en' }
]);

export const locale = i18NPlugin.global.locale;

if (typeof window !== 'undefined') {
   nextTick(async () => {
      await loadLocaleMessages(i18NPlugin?.global?.fallbackLocale?.value);

      watch(
         locale,
         async (newLocale, oldLocale) => {
            if (oldLocale != newLocale) {
               localStorage?.setItem?.('app_lang', newLocale);
            }
            document.querySelector('html').setAttribute('lang', newLocale);
         },
         { immediate: true }
      );

      watch(
         locale,
         async (newLocale) => {
            await loadLocaleMessages(newLocale);
         },
         { immediate: true, once: true }
      );
   });
}

export default i18NPlugin.global;
