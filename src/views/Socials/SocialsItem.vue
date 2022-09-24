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
   }
})
</script>
<template>
   <div class="bg-white-secondary rounded-16 p-16 border border-gray-secondary flex relative" @mouseenter="iconActive = !iconActive" @mouseleave="iconActive = !iconActive;">
      <div class="flex gap-10 absolute top-22 right-22 z-10" v-if="iconActive">
         <div role="button" class="bg-yellow-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('edit', props)">
            <img class="w-24 h-24" src="@/assets/images/edit.png" alt="">
         </div>
         <div role="button" class="bg-red-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('remove', props.id, props.name.uz)">
            <img class="w-24 h-24" src="@/assets/images/delete.png" alt="">
         </div>
      </div>
      <div class="flex items-center gap-8">
         <div class="w-56 h-56 shrink-0 flex items-center justify-center rounded-4 bg-white-primary border border-gray-secondary">
            <img class="w-24 h-24" src="@/assets/images/social.png" alt="">
         </div>
         <p class="text-sm leading-21 text-black-primary">{{props.name.uz}}</p>
      </div>
   </div>
</template>
   