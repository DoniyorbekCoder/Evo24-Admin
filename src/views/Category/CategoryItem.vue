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
   <div class="bg-white-secondary rounded-16 p-32 border border-gray-secondary flex relative" @mouseenter="iconActive = !iconActive" @mouseleave="iconActive = !iconActive;">
      <!-- <base-image :src="props.image" alt="photo" class="w-32 h-42 object-cover rounded-md" /> -->
      <div class="flex gap-10 absolute top-32 right-32 z-10" v-if="iconActive">
         <div role="button" class="bg-yellow-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('edit', props)">
            <img class="w-24 h-24" src="@/assets/images/edit.png" alt="">
         </div>
         <div role="button" class="bg-red-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('remove', props.id, props.name.uz)">
            <img class="w-24 h-24" src="@/assets/images/delete.png" alt="">
         </div>
      </div>
      <div>
         <p class="text-lg leading-25 font-extrabold text-black-primary font-grotesk mb-4">{{props.name.uz}}</p>
         <p class="text-sm leading-17 text-black-secondary">{{props.foods.length}} ta taom mavjud</p>
      </div>
   </div>
</template>
   