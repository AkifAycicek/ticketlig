<script lang="ts" setup>
import EventApi from '@/services/api/event/EventApi';
import BaseResponse from '@/services/dto/BaseResponse';
import { Event, EventModel } from '@/services/models/EventModel';

const response = await EventApi.list<Event>();
const events = BaseResponse.create<Event[]>()._merge(response)._map(EventModel);
</script>

<template>
   <div class="page__container">
      <h1 class="page__title">
         <span v-text="$t($route.meta.label as string)" />
      </h1>
      <div class="event-list">
         <RouterLink
            custom
            v-for="event in events._data"
            :key="event.id"
            :to="{ name: 'event-detail', params: { eventId: event.id } }"
            v-slot="{ href, navigate }"
         >
            <a :href @click.prevent="() => navigate()" class="event-card">
               <Card class="event-card__card">
                  <template #header>
                     <img alt="user header" :src="event.image_url" class="event-card__image" />
                  </template>
                  <template #title
                     ><span v-text="event.title" class="event-card__title"
                  /></template>
                  <template #subtitle
                     ><span v-text="event.event_date" class="event-card__subtitle"
                  /></template>
                  <template #content>
                     <p class="event-card__content" v-text="event.venue.name" />
                  </template>
               </Card>
            </a>
         </RouterLink>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.page {
   &__container {
      @apply flex flex-col gap-4;
   }

   &__title {
      @apply text-5xl;
   }
}

.event {
   &-list {
      @apply flex gap-4 flex-wrap;
   }
   &-card {
      @apply flex-[.3] min-w-48;

      &__card {
         @apply overflow-hidden;
      }

      &__image {
         @apply w-full object-cover;
      }

      &__title {
         @apply text-xl font-semibold;
      }

      &__subtitle {
         @apply text-sm text-gray-500;
      }

      &__content {
         @apply text-sm;
      }
   }
}
</style>
