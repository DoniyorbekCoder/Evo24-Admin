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
})
</script>
<template>
   <div class="bg-white-secondary rounded-16 p-16 border border-gray-secondary flex relative" @mouseenter="iconActive = !iconActive" @mouseleave="iconActive = !iconActive;">
      <div class="flex gap-10 absolute top-16 right-16 z-10" v-if="iconActive">
         <div role="button" class="bg-yellow-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('edit', props)">
            <img class="w-24 h-24" src="@/assets/images/edit.png" alt="">
         </div>
         <div role="button" class="bg-red-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('remove', props.id, props.name.uz)">
            <img class="w-24 h-24" src="@/assets/images/delete.png" alt="">
         </div>
      </div>

      <div class="w-full">
         <p class="font-semibold text-lg leading-28 text-black-primary mb-4">Bahodir Yokubov</p>
         <div class="flex items-center gap-4">
            <img class="w-17 h-17" src="@/assets/images/lock.png" alt="">
            <p class="text-sm leading-20 text-black-primary">11221212zaq</p>
         </div>
         <div class="w-full h-1 bg-gray-secondary my-16"></div>
         <div class="grid md:grid-cols-2 gap-16">
            <div class="flex items-center gap-4">
               <img class="w-17 h-17 shrink-0" src="@/assets/images/tick.png" alt="">
               <p class="text-sm leading-20 font-medium text-black-primary">Ovqatlar</p>
            </div>
            <div class="flex items-center gap-4">
               <img class="w-17 h-17 shrink-0" src="@/assets/images/tick.png" alt="">
               <p class="text-sm leading-20 font-medium text-black-primary">Xodimlar</p>
            </div>
            <div class="flex items-center gap-4">
               <img class="w-17 h-17 shrink-0" src="@/assets/images/tick.png" alt="">
               <p class="text-sm leading-20 font-medium text-black-primary">Kategoriyalar</p>
            </div>
            <div class="flex items-center gap-4">
               <img class="w-17 h-17 shrink-0" src="@/assets/images/tick.png" alt="">
               <p class="text-sm leading-20 font-medium text-black-primary">Manzillar</p>
            </div>
         </div>
      </div>
   </div>
</template>
   