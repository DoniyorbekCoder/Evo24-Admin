<script setup lang="ts">
   // import { ref } from 'vue';
   const emit = defineEmits(["edit", "remove"])
   // const iconActive = ref(false);
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
      <div class="flex items-center gap-16 px-16 justify-between">
         <p class="w-66 text-xs font-medium leading-15 uppercase text-black-secondary">#60604</p>
         <p class="w-210 text-xs font-medium leading-15 uppercase text-black-secondary">Bahodir Yokubov</p>
         <p class="w-160 text-xs font-medium leading-15 uppercase text-black-secondary">(97) 707-27-12</p>
         <p class="w-130 text-xs font-medium leading-15 uppercase text-black-secondary">25ta</p>
         <p class="w-130 text-xs font-medium leading-15 uppercase text-black-secondary">3ta</p>
         <div class="w-152 flex items-center gap-12">
            <div role="button"  @click="emit('edit', props)" class="flex items-center justify-center w-44 h-44 rounded-full bg-yellow-secondary">
               <img class="w-20 h-20" src="@/assets/images/edit.png" alt="">
            </div>
            <div role="button" @click="emit('remove', props.id, props.name.uz)" class="flex items-center justify-center w-44 h-44 rounded-full bg-red-secondary">
               <img class="w-20 h-20" src="@/assets/images/delete.png" alt="">
            </div>
            <div class="flex items-center justify-center w-44 h-44 rounded-full border border-gray-secondary bg-white-primary">
               <img class="w-20 h-20" src="@/assets/images/arrow-right-s.png" alt="">
            </div>
         </div>
      </div>
   </template>