import { app } from '@/main';

export const appErrorHandler = async (error: any) => {
   console.error(error);

   await nextTick(async () => {
      const toast = app.config?.globalProperties?.$toast;

      const summaryKey = error.name || error.status;
      const summaryPath = 'errors.' + summaryKey;
      const summaryText = i18n.te(summaryPath) ? i18n.t(summaryPath) : summaryKey || '';

      const detailKey =
         error.message || error.details || error.code || error.description || error.hint;
      const detailPath = 'errors.' + detailKey;
      const detailText = i18n.te(detailPath) ? i18n.t(detailPath) : detailKey || '';

      const summary = summaryText;
      const detail = detailText;

      toast?.add?.({
         life: 0,
         severity: ToastSeverity.WARN,
         summary,
         detail
      });
   });
};
