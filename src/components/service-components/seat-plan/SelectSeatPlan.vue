src/components/service-components/seat-plan/SelectSeatPlan.vue
<script setup lang="ts">
import { Seat } from '@/services/models/SeatModel';
import { computed, ref } from 'vue';

const props = withDefaults(
   defineProps<{
      seats?: Seat[];
      disabledSeats?: Seat[] | undefined;
   }>(),
   {
      disabledSeats: () => []
   }
);

const modelValue = defineModel<Seat['id'][]>();

const useSelection = () => {
   const toggleSeat = (seat: Seat) => {
      if (!isSeatAvailable(seat)) return;
      modelValue.value = _xor(modelValue.value, [seat.id]);
   };

   const isSeatAvailable = (seat: Seat) => {
      const isSeatDisabled = _some(props.disabledSeats, (e) => _isEqual(e.id, seat.id));

      return !isSeatDisabled;
   };
   return { toggleSeat, isSeatAvailable };
};

const useZoomAndPan = () => {
   const scale = ref(1);
   const offset = ref({ x: 0, y: 0 });
   const isPanning = ref(false);
   const startPan = ref({ x: 0, y: 0 });

   const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.3 : 0.3;
      scale.value = Math.min(Math.max(0.5, scale.value + delta), 2.5);
   };

   const startDrag = (e: MouseEvent) => {
      isPanning.value = true;
      startPan.value = {
         x: e.clientX - offset.value.x,
         y: e.clientY - offset.value.y
      };
   };

   const onDrag = _throttle((e: MouseEvent) => {
      if (!isPanning.value) return;
      offset.value = {
         x: e.clientX - startPan.value.x,
         y: e.clientY - startPan.value.y
      };
   }, 16);

   const endDrag = () => {
      isPanning.value = false;
   };

   const transform = computed(
      () => `translate(${offset.value.x} ${offset.value.y}) scale(${scale.value})`
   );
   return { scale, offset, transform, isPanning, onWheel, startDrag, onDrag, endDrag };
};

const useRowGroups = (seats: Seat[]) => {
   const rows = computed(() => {
      return seats.reduce((acc: Record<string, Seat[]>, seat) => {
         if (!_has(acc, seat.row)) _set(acc, seat.row, []);
         _get(acc, seat.row).push(seat);
         return acc;
      }, {});
   });
   return { rows };
};

const { toggleSeat, isSeatAvailable } = useSelection();
const { scale, transform, isPanning, onWheel, startDrag, onDrag, endDrag } = useZoomAndPan();
const { rows } = useRowGroups(props.seats);
</script>

<template>
   <div class="relative bg-slate-200 rounded-xl overflow-hidden select-none">
      <div class="absolute right-3 top-3 z-10 flex flex-col gap-2">
         <Button severity="secondary" @click="scale = Math.min(scale + 0.3, 2.5)"> ＋ </Button>
         <Button severity="secondary" @click="scale = Math.max(scale - 0.3, 0.5)"> － </Button>
      </div>

      <svg
         width="100%"
         height="350"
         @wheel="onWheel"
         @mousedown="startDrag"
         @mousemove="onDrag"
         @mouseup="endDrag"
         @mouseleave="endDrag"
         :class="{
            'cursor-grab': !isPanning,
            'cursor-grabbing': isPanning
         }"
      >
         <g :transform="transform">
            <g
               v-for="(rowSeats, row, rowIndex) in rows"
               :key="row"
               :transform="`translate(80, ${rowIndex * 50 + 50})`"
            >
               <text x="-40" y="6" class="fill-slate-500 text-sm" v-text="row" />

               <circle
                  v-for="(seat, i) in rowSeats"
                  :key="seat.id"
                  :cx="i * 35"
                  cy="0"
                  r="12"
                  class="cursor-pointer transition-all"
                  v-tooltip="
                     `${$t('events.event_seat.seat')}: ${row}${seat.seat}
                     ${isSeatAvailable(seat) ? $t('events.event_seat.empty') : $t('events.event_seat.sold_out/not_avaliable')}`
                  "
                  :class="{
                     'fill-slate-300 cursor-not-allowed': !isSeatAvailable(seat),
                     'fill-white stroke-slate-400 hover:fill-blue-200': isSeatAvailable(seat),
                     '!fill-blue-500': _find(modelValue, (e) => _isEqual(e, seat.id))
                  }"
                  @click.stop="toggleSeat(seat)"
               />
            </g>
         </g>
      </svg>
   </div>
</template>
