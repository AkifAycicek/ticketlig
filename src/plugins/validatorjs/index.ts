import Validator from 'validatorjs';

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

export default Validator;
