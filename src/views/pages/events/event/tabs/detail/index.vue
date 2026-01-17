<script lang="ts" setup>
import { FormCreate } from '@/lib/Form';
import { Event, EventModel, EventPaymentPayload } from '@/services/models/EventModel';
import { SelectChangeEvent } from 'primevue';

const props = defineProps<{
   event: Event;
}>();

const router = useRouter();
const route = useRoute();

const form: FormCreate<EventPaymentPayload> = useStore().getters.checkoutForm;

const event = EventModel.create<Event>(props.event);

const selectEventCategory = (e: SelectChangeEvent) => {
   form._set('eventCategoryId', e.value);

   router.push({
      name: 'event-seat-plan',
      params: {
         eventId: event.id,
         eventCategoryId: form._get('eventCategoryId')
      }
   });
};

const eventId = _toNumber(route.params.eventId);
const eventCategoryId = form.eventCategoryId || _toNumber(route.params.eventCategoryId);
form._set('eventId', _toNumber(eventId));
form._set('eventCategoryId', _toNumber(eventCategoryId));
form._checkPoint();
</script>

<template>
   <div class="event-detail">
      <div class="event-detail__content" id="description">
         <h2 class="event-detail__content-header" v-text="$t('events.event.about_the_event')" />
         <p v-text="event.description" />
      </div>
      <div class="event-detail__content" id="address">
         <h2 class="event-detail__content-header" v-text="$t('events.event.address')" />
         <p v-text="event.venue.address" />
      </div>
      <div class="event-detail__content" id="event_categories">
         <FormField
            class="event-detail__form-field"
            fluid
            :label="$t('events.event.select_event_category')"
            v-slot="slopProps"
         >
            <Select
               v-bind="slopProps"
               :options="event.event_categories"
               option-label="name"
               option-value="id"
               :model-value="form.eventCategoryId"
               @change="selectEventCategory"
            >
               <template #option="{ option }">
                  {{
                     `${option.name}: ${(option.price as number).toLocaleString(locale, {
                        style: 'currency',
                        currency: 'try',
                        currencyDisplay: 'symbol'
                     })}`
                  }}
               </template>
            </Select>
         </FormField>
      </div>
   </div>
</template>
<style lang="scss" scoped>
.event-detail {
   @apply flex flex-col gap-12;

   &__content {
      @apply flex gap-2 flex-col;

      &-header {
         @apply text-xl;
      }
   }

   &__form-field {
      @apply px-0 w-fit;
   }
}
</style>
