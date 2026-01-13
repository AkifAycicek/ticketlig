export const i18NBeforeEach = async (to, from, next) => {
   let toLocale = to.params.locale;

   if (!SUPPORTED_LOCALES.value.find((lang) => lang.value === toLocale)) {
      toLocale = locale.value || i18n.fallbackLocale.value;
      _merge(to, { params: { locale: toLocale } });
      return next(to);
   }

   locale.value = toLocale;

   _merge(to, { params: { locale: toLocale } });

   await loadLocaleMessages(toLocale);

   return next();
};
