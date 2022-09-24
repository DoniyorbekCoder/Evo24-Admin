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
   <div class="bg-white-secondary rounded-16 p-16 flex relative border border-gray-secondary" @mouseenter="iconActive = !iconActive" @mouseleave="iconActive = !iconActive;">
      <p class="top font-bold text-xs leading-15 uppercase text-white-primary px-8 py-4 rounded-t-4 bg-green-primary">Eng mashhur</p>
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
      <div class="flex items-center gap-16">
         <div class="w-97 h-89 flex items-center justify-center overflow-hidden">
            <img class="max-w-full max-h-full object-cover" src="@/assets/images/food.png" alt="">
         </div>
         <div>
            <p class="text-lg font-bold leading-24 text-black-primary mb-8">Mol go‘shtli donar</p>
            <div class="flex items-center justify-between">
               <div class="flex items-center gap-4">
                  <img class="w-17 h-17" src="@/assets/images/tag.png" alt="">
                  <p class="text-sm leading-17 text-black-primary">22,000 so‘m</p>
               </div>
               <img class="w-17 h-17" src="@/assets/images/arrow-right-s.png" alt="">
            </div>
         </div>
      </div>
   </div>
</template>
   
<style scoped>
   .top {
      position: absolute;
      top: -23px;
      left: 30px;
   }
</style>