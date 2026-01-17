<script lang="ts" setup>
import { FormCreate } from '@/lib/Form';
import EventApi from '@/services/api/event/EventApi';
import { Event, EventModel, EventPaymentPayload } from '@/services/models/EventModel';

const props = defineProps<{
   eventId: string;
}>();

const route = useRoute();
const tab = computed(() => route.hash || (route.name as string));

const {
   data: { data }
} = await EventApi.get<Event>(props.eventId);
const event = EventModel.create<Event>(data);

const form: FormCreate<EventPaymentPayload> = useStore().getters.checkoutForm;

onUnmounted(() => form._reset({}));
</script>

<template>
   <div class="event__container">
      <h1 class="event__title" v-text="event?.title" />

      <div class="event__info-group">
         <div class="event__info-item">
            <div class="event__info-item-content">
               <i :class="PrimeIcons.CALENDAR" />
               <p v-text="event.event_date" />
            </div>
            <div class="event__info-item-content">
               <i :class="PrimeIcons.MAP_MARKER" />
               <p v-text="event.venue.name" />
            </div>
         </div>
         <Image
            preview
            :src="event.image_url"
            :image-class="'event__image--fluid'"
            class="event__image"
         />
         <Tabs class="event__tabs" :value="tab">
            <TabList>
               <Tab
                  value="#description"
                  v-text="$t('events.event.tabs.details')"
                  @click="$router.push({ name: 'event-detail', hash: '#description' })"
               />
               <Tab
                  value="#address"
                  v-text="$t('address.event.tabs.address')"
                  @click="$router.push({ name: 'event-detail', hash: '#address' })"
               />
               <Tab
                  value="#event_categories"
                  v-text="$t('events.event.tabs.event_categories')"
                  @click="$router.push({ name: 'event-detail', hash: '#event_categories' })"
               />
               <Tab
                  value="event-seat-plan"
                  :disabled="!form.eventCategoryId"
                  v-text="$t('events.event.tabs.seat_plan')"
                  @click="
                     $router.push({
                        name: 'event-seat-plan',
                        params: {
                           eventCategoryId: form.eventCategoryId
                        }
                     })
                  "
               />
            </TabList>
         </Tabs>
         <RouteLoader :event="event._data" />
      </div>
   </div>
</template>

<style lang="scss" scoped>
.event {
   &__container {
      @apply flex flex-col gap-4;
   }

   &__title {
      @apply text-3xl;
   }

   &__info {
      &-group {
         @apply flex flex-col gap-4;
      }

      &-item {
         @apply flex gap-4 items-center text-sm;
      }

      &-item-content {
         @apply flex gap-2 items-center;
      }
   }

   &__image {
      @apply max-w-[50%] self-center rounded-lg overflow-hidden;

      &--fluid {
         @apply w-full;
      }
   }

   &__tabs {
      @apply self-start;
   }
}
</style>
