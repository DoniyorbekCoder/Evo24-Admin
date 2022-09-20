<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(["edit", "remove"])
const iconActive = ref(false);
const props = defineProps({
   id: {
      type: Number,
      required: true
   },
   name: {
      type: Object,
      required: true
   },
   priority: {
      type: Number,
      required: true
   },
   active: {
      type: Boolean,
      required: true
   },
   foods: {
      type: Array,
      required: true
   }
})
</script>
<template>
   <div class="bg-white-primary rounded-15 p-15 flex relative" @mouseenter="iconActive = !iconActive" @mouseleave="iconActive = !iconActive;">
      <!-- <base-image :src="props.image" alt="photo" class="w-32 h-42 object-cover rounded-md" /> -->
      <div class="flex gap-15 absolute top-15 right-15 z-10" v-if="iconActive">
         <div role="button" class="bg-yellow-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full border border-yellow-primary"
            @click="emit('edit', props)">
            <img class="w-24 h-24" src="@/assets/images/edit.png" alt="">
         </div>
         <div role="button" class="bg-red-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full border border-red-primary"
            @click="emit('remove', props.id, props.name.uz)">
            <img class="w-24 h-24" src="@/assets/images/delete.png" alt="">
         </div>
      </div>
      <div>
         <p>{{props.id}}</p>
         <p>Active: {{props.active}}</p>
         <p>{{props.name.uz}}</p>
         <p>{{props.foods}}</p>
      </div>
   </div>
</template>
   