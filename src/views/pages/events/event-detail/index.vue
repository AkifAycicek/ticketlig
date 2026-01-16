<script lang="ts" setup>
import EventApi from '@/services/api/event/EventApi';
import { Event, EventModel } from '@/services/models/EventModel';

const props = defineProps<{
   id: string;
}>();

const route = useRoute();
const tab = route.hash;

const {
   data: { data }
} = await EventApi.get<Event>(props.id);
const event = EventModel.create<Event>(data);
</script>

<template>
   <div class="event-detail__container">
      <h1 class="event-detail__title" v-text="event?.title" />

      <div class="event-detail__info-group">
         <div class="event-detail__info-item">
            <div class="event-detail__info-item-content">
               <i :class="PrimeIcons.CALENDAR" />
               <p v-text="event.event_date" />
            </div>
            <div class="event-detail__info-item-content">
               <i :class="PrimeIcons.MAP_MARKER" />
               <p v-text="event.venue.name" />
            </div>
         </div>
         <Image
            preview
            :src="event.image_url"
            :image-class="'event-detail__image--fluid'"
            class="event-detail__image"
         />
         <Tabs class="event-detail__tabs" :value="tab">
            <TabList>
               <Tab
                  value="#description"
                  v-text="$t('events.event_detatil.tabs.details')"
                  @click="$router.push({ hash: '#description' })"
               />
               <Tab
                  value="#address"
                  v-text="$t('address.event_detatil.tabs.address')"
                  @click="$router.push({ hash: '#address' })"
               />
               <Tab
                  value="#event_categories"
                  v-text="$t('events.event_detatil.tabs.event_categories')"
                  @click="$router.push({ hash: '#event_categories' })"
               />
            </TabList>
         </Tabs>
         <div class="event-detail__tab-content" id="description">
            <h2
               class="event-detail__tab-header"
               v-text="$t('events.event_detail.about_the_event')"
            />
            <p v-text="event.description" />
         </div>
         <div class="event-detail__tab-content" id="address">
            <h2 class="event-detail__tab-header" v-text="$t('events.event_detail.address')" />
            <p v-text="event.venue.address" />
         </div>
         <div class="event-detail__tab-content" id="event_categories">
            <FormField
               class="event-detail__form-field"
               fluid
               :label="$t('events.event_detail.select_event_category')"
               v-slot="slopProps"
            >
               <Select
                  v-bind="slopProps"
                  :options="event.event_categories"
                  option-label="name"
                  option-value="id"
                  @change="(e) => console.log(e)"
               />
            </FormField>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.event-detail {
   &__container {
      @apply flex flex-col gap-4;
   }

   &__title {
      @apply text-3xl;
   }

   &__info {
      &-group {
         @apply flex flex-col gap-8;
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

   &__tab {
      &-content {
         @apply flex gap-2 flex-col;
      }

      &-header {
         @apply text-xl;
      }
   }

   &__form-field {
      @apply px-0 w-fit;
   }
}
</style>
