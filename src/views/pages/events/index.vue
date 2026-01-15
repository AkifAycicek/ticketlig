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
         <Card class="w-1/2 lg:w-1/4 overflow-hidden" v-for="event in _values(events)">
            <template #header>
               <img alt="user header" :src="event.image_url" />
            </template>
            <template #title><span v-text="event.title" /></template>
            <template #content>
               <p class="m-0" v-text="event.venue.name" />
            </template>
         </Card>
      </div>
   </div>
</template>
<style lang="scss"></style>
