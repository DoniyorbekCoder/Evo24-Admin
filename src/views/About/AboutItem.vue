<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(["edit"])
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
   <div class="bg-white-secondary rounded-16 p-32 border border-gray-secondary relative max-w-762" @mouseenter="iconActive = !iconActive" @mouseleave="iconActive = !iconActive;">
      <div class="flex gap-10 absolute top-16 right-16 z-10" v-if="iconActive">
         <div role="button" class="bg-yellow-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full"
            @click="emit('edit', props)">
            <img class="w-24 h-24" src="@/assets/images/edit.png" alt="">
         </div>
      </div>

      <div class="flex items-center gap-16 mb-32">
         <div class="w-90 h-90 rounded-4 overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/brand.png" alt="">
         </div>
         <p class="font-grotesk text-lg font-semibold leading-28 text-black-primary">Evo24</p>
      </div>

      <p class="text-base leading-25 text-black-primary">Bilasizmi, kompaniyaning birinchi filiali 2006 yilda ochilgan va shu kungacha muvaffaqiyatli faoliyat yuritib kelmoqda? 15 yil davomida kompaniya avtobus bekatidagi kichik ovqatlanish joyidan zamonaviy, kengaytirilgan tarmoqqa aylandi, u bugungi kunda butun O‘zbekiston bo‘ylab 60 dan ortiq restoranlarni, o‘zining eng tezkor yetkazib berish xizmatini, zamonaviy, joriy etilgan IT infratuzilmasini va 2000 dan ortiqni o‘z ichiga oladi.</p>
   </div>
</template>
   