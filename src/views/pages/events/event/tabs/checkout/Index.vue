<script lang="ts" setup>
import { parseDayjs } from '@/lib/dayjs';
import { FormCreate } from '@/lib/Form';
import PaymentApi from '@/services/api/payment/PaymentApi';
import { EventPaymentPayload } from '@/services/models/EventModel';
import { useToast } from 'primevue';

const router = useRouter();
const route = useRoute();
const toast = useToast();

const form: FormCreate<EventPaymentPayload> = useStore().getters.checkoutForm;

const [year, month] = parseDayjs({ value: Date.now(), validate: false })
   .format('YYYY-MM')
   .split('-');

const { eventId, eventCategoryId } = route.params;

form._set('eventId', _toNumber(eventId));
form._set('eventCategoryId', _toNumber(eventCategoryId));
form._set('cc_exp_year', _toNumber(year));
form._set('cc_exp_month', _toNumber(month));
form._checkPoint();

const dateInputValue = computed(() =>
   parseDayjs({
      value: `${form.cc_exp_year}-${form.cc_exp_month?.toString().padStart(2, '0')}-01`
   }).toDate()
);

const submit = async () => {
   if (!form._validate(['seats'])) {
      return router.push({ name: 'event-seat-plan' });
   }
   if (!form._validate()) {
      return;
   }

   await PaymentApi.post({}).then(() => {
      toast.add({
         life: 5000,
         summary: i18n.t('toast.success'),
         detail: i18n.t('toast.ticket_buyed_successfully')
      });
      router.push({ name: 'events' });
   });
};
</script>

<template>
   <FormBox :form @submit="() => submit()">
      <FormBox :legend="$t('events.event.checkout.section.customer')" class="form_box__section">
         <FormField
            v-slot="slotProps"
            :label="$t('fields.customer_name')"
            fluid
            :error="form._errors.first('customer_name')"
         >
            <InputText v-bind="slotProps" v-model="form.customer_name" />
         </FormField>
         <FormField
            v-slot="slotProps"
            :label="$t('fields.customer_surname')"
            fluid
            :error="form._errors.first('customer_surname')"
         >
            <InputText v-bind="slotProps" v-model="form.customer_surname" />
         </FormField>
         <FormField
            v-slot="slotProps"
            :label="$t('fields.customer_email')"
            fluid
            :error="form._errors.first('customer_email')"
         >
            <InputText v-bind="slotProps" v-model="form.customer_email" />
         </FormField>
      </FormBox>
      <FormBox
         :legend="$t('events.event.checkout.section.credit_card')"
         class="form_box__section form_box__section--credit-card"
      >
         <FormField :label="$t('fields.cc_number')" fluid :error="form._errors.first('cc_number')">
            <template #default="slotProps">
               <InputMask
                  v-bind="slotProps"
                  mask="9999 9999 9999 9999"
                  slot-char="____ ____ ____ ____"
                  v-model="form.cc_number"
               />
            </template>
            <template #badges>
               <i
                  :class="PrimeIcons.INFO_CIRCLE"
                  v-tooltip="
                     $t('events.event.checkout.credit_card_hint.you_can_try_4111_1111_1111_1111')
                  "
               />
            </template>
         </FormField>
         <FormField
            v-slot="slotProps"
            :label="$t('fields.cc_exp_cvv')"
            fluid
            :error="
               form._errors.first('cc_exp_year') ||
               form._errors.first('cc_exp_month') ||
               form._errors.first('cc_exp_cvv')
            "
         >
            <DatePicker
               :pt="{
                  header: {
                     class: '!border-b-0'
                  },
                  dayView: {
                     class: 'hidden'
                  }
               }"
               :model-value="dateInputValue"
               date-format="mm/yy"
               @year-change="(e) => form._set('cc_exp_year', e.year)"
               @month-change="(e) => form._set('cc_exp_month', e.month)"
            />
            <InputOtp
               autocomplete="cc-number"
               :length="3"
               integer-only
               :model-value="_toString(form.cc_exp_cvv)"
               @change="(e) => form._set('cc_exp_cvv', _toNumber(e.value))"
            />
         </FormField>
      </FormBox>
      <template #form-actions>
         <div class="form_box__actions-bar">
            <span class="form_box__button-container">
               <Button
                  :label="$t('form.action.reset')"
                  severity="secondary"
                  class="form_box__button"
                  :disabled="!form?._isChanged"
                  type="reset"
               />
               <Button
                  v-tooltip.top="{
                     value: `${$t('events.event.checkout.submit.tooltip.the_last_exit_before_the_bridge!')}\n${form._toJson}`
                  }"
                  :label="$t('form.action.submit')"
                  class="form_box__button"
                  type="submit"
               />
            </span>
         </div>
      </template>
   </FormBox>
</template>

<style lang="scss" scoped>
.form_box {
   &__section {
      @apply flex flex-col gap-4;

      &--credit-card {
         @apply flex flex-col gap-4;
      }
   }

   &__actions-bar {
      @apply mt-6;
   }

   &__button-container {
      @apply flex gap-4;
   }

   &__button {
      @apply px-4 py-2;
   }
}
</style>
