<script lang="ts" setup>
import EventApi from '@/services/api/event/EventApi';
import BaseResponse from '@/services/dto/BaseResponse';
import { Event, EventModel } from '@/services/models/EventModel';

const response = await EventApi.list<Event>();
const events = BaseResponse.create<Event[]>()._merge(response)._map(EventModel);
</script>
<template>
   <div class="flex flex-col gap-4">
      <h1 class="text-5xl" v-text="$t($route.meta.label as string)" />

      <div class="flex gap-4 flex-wrap">
         <RouterLink
            custom
            v-for="(event, key) in _values(events)"
            :key="event.id"
            :to="{ name: 'event-detail', params: { id: event.id } }"
            v-slot="{ href, navigate }"
         >
            <a :href @click.prevent="() => navigate()" class="w-1/2 lg:w-1/4">
               <Card class="overflow-hidden">
                  <template #header>
                     <img alt="user header" :src="event.image_url" />
                  </template>
                  <template #title><span v-text="event.title" /></template>
                  <template #subtitle><span v-text="event.event_date" /></template>
                  <template #content>
                     <p class="m-0" v-text="event.venue.name" />
                  </template>
               </Card>
            </a>
         </RouterLink>
      </div>
   </div>
</template>
<style lang="scss"></style>
