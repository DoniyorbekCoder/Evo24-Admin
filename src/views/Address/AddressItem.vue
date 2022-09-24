<script setup lang="ts">
const emit = defineEmits(["edit", "remove"])
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
   <div class="bg-white-secondary rounded-16 p-16 border border-gray-secondary space-y-16">
      <div class="flex gap-16">
         <div class="w-74 h-74 shrink-0 flex items-center justify-center rounded-4 overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/brand.png" alt="">
         </div>
         <div>
            <p class="font-bold text-lg leading-24 text-black-primary mb-8">Parkent</p>
            <div class="flex gap-4">
               <img class="w-17 h-17" src="@/assets/images/map.png" alt="">
               <p class="text-sm leading-21 text-black-primary">M.Ulug’bek tumani. Muhammad Yusuf 1A </p>
            </div>
         </div>
      </div>
      <div class="flex gap-10 items-center justify-end">
         <div role="button" class="bg-yellow-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('edit', props)">
            <img class="w-24 h-24" src="@/assets/images/edit.png" alt="">
         </div>
         <div role="button" class="bg-red-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('remove', props.id, props.name.uz)">
            <img class="w-24 h-24" src="@/assets/images/delete.png" alt="">
         </div>
      </div>
   </div>
</template>