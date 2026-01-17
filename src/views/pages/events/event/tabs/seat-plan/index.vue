<script setup lang="ts">
import { FormCreate } from '@/lib/Form';
import SeatPlanApi from '@/services/api/seat-plan/SeatPlanApi';
import BaseResponse from '@/services/dto/BaseResponse';
import { Event, EventPaymentPayload } from '@/services/models/EventModel';
import { Seat, SeatModel } from '@/services/models/SeatModel';

const props = defineProps<{
   event: Event;
}>();

const route = useRoute();
const eventId = _toNumber(route.params.eventId);
const eventCategoryId = _toNumber(route.params.eventCategoryId);

const eventCategory = _find(props.event.event_categories, ({ id }) =>
   _isEqual(id, eventCategoryId)
);

const response = await SeatPlanApi.list(eventId, eventCategoryId);
const seats = BaseResponse.create<Seat[]>()._merge(response)._map(SeatModel);

const form: FormCreate<EventPaymentPayload> = useStore().getters.checkoutForm;
</script>

<template>
   <FormBox
      :form
      @submit="form._validate(['seats']) && $router.push({ name: 'event-checkout' })"
      :submitText="$t('events.event.go_to_checkout')"
   >
      <FormField
         :label="`${$t('fields.seats')} - ${eventCategory.name}`"
         class="w-full"
         fluid
         v-slot="slotProps"
         :error="form._errors.first('seats')"
      >
         <SelectSeatPlan
            v-bind="slotProps"
            v-model="form._data.seats"
            :seats="seats._data"
            :disabledSeats="_filter(seats._data, (e) => e.isBooked)"
         />
      </FormField>
   </FormBox>
</template>
