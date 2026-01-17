import Validator from 'validatorjs';

//@ts-ignore
import en from 'validatorjs/src/lang/en.js';
//@ts-ignore
import tr from 'validatorjs/src/lang/tr.js';

export const validatorLocales = {
   en,
   tr
};

try {
   _toPairs(validatorLocales).forEach(([lang, messages]) => {
      Validator.setMessages(lang, messages);
   });
} catch (error) {
   console.warn(`Failed to load validator locales`, error);
}

export const formAttributeFormatter = (attr: string) => {
   const words = i18n
      .t(attr)
      .split?.(/[\.\s]/g)
      .map?.((e: any) => {
         if (Number.isNaN(Number.parseInt(e))) return e;
      })
      .filter(Boolean);

   const field = _last(words);
   const attributeName = i18n.t('fields.' + field);
   return attributeName;
};

Validator.setAttributeFormatter(formAttributeFormatter);

Validator.register('credit_card', (value) => {
   return !!value
      ?.toString?.()
      .match?.(
         `^(?:4\\d{3}(?: ?\\d{4}){3}|5[1-5]\\d{2}(?: ?\\d{4}){3}|2(?:2[2-9]\\d|[3-6]\\d{2}|7[01]\\d|720)(?: ?\\d{12})|6(?:011|5\\d{2})(?: ?\\d{12})|3[47]\\d{2}(?: ?\\d{6})(?: ?\\d{5})|3(?:0[0-5]|[68]\\d)(?: ?\\d{11})|(?:2131|1800|35\\d{3})(?: ?\\d{11}))$`
      );
});

export default Validator;
