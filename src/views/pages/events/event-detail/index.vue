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
   <div class="flex flex-col gap-4">
      <h1 class="text-3xl" v-text="event?.title" />

      <div class="flex gap-8 flex-col">
         <div class="flex gap-4 items-center text-sm">
            <div class="flex gap-2 items-center">
               <i :class="PrimeIcons.CALENDAR" />
               <p v-text="event.event_date" />
            </div>
            <div class="flex gap-2 items-center">
               <i :class="PrimeIcons.MAP_MARKER" />
               <p v-text="event.venue.name" />
            </div>
         </div>
         <Image
            preview
            :src="event.image_url"
            :image-class="'w-full'"
            class="max-w-[50%] self-center rounded-lg overflow-hidden"
         />
         <Tabs class="self-start" :value="tab">
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
         <div class="flex gap-2 flex-col" id="description">
            <h2 class="text-xl" v-text="$t('events.event_detail.about_the_event')" />
            <p v-text="event.description" />
         </div>
         <div class="flex gap-2 flex-col" id="address">
            <h2 class="text-xl" v-text="$t('events.event_detail.address')" />
            <p v-text="event.venue.address" />
         </div>
         <div class="flex gap-2" id="event_categories">
            <FormField
               class="!px-0"
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
<style lang="scss"></style>
