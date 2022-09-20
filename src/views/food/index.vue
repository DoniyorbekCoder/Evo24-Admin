<script setup lang="ts">
   import { defineAsyncComponent, ref } from 'vue'
   import { useRouter, useRoute } from 'vue-router'
   import type { Food } from '@/services/food'
   import { getFoods } from '@/services/food'
   import { _deleteModal, _loading, _toast, OPEN_DELETE_MODAL, OPEN_LOADING_MODAL, CLOSE_LOADING_MODAL, OPEN_NOTIFICATION} from '@/store'
import FoodItem from './FoodItem.vue'
   const route = useRoute()
   const router = useRouter()
   const CategoryItem = defineAsyncComponent(() => import('./FoodItem.vue'));
   const TheModal = defineAsyncComponent(() => import('./TheModal.vue'))
   
   const items = ref<{isLoading: boolean, list: Food[]}>({
     isLoading: false,
     list: []
   })
   
   // async function changeQuery(param: { key: string, value:number }) {
   //     const query = {
   //         ...route.query
   //     }
   //     query[param.key] = String(param.value)
   //     await router.replace({ query })
   //     getItems()
   // }
   
   const modalRef = ref()
   const searchInput = ref('')
   async function getItems() {
      OPEN_LOADING_MODAL()
      const [error, response] = await getFoods()
      console.log(response);
      CLOSE_LOADING_MODAL()
      items.value.list = response
   }
   
   function openModal(val: any) {
     modalRef.value.open(val)
   }
   getItems()
   </script>
   <template>
   <div class="fixed top-0 bottom-0 right-0 w-full overflow-y-scroll bg-white-secondary">
     <div class="flex justify-between items-center mb-30">
       <p class="text-black-primary text-xl font-bold">Kategoriyalar</p>
   
       <div class="flex gap-15 items-center">
         <!-- <div class="bg-white-primary flex items-center gap-5 p-5 px-10 rounded" role="button">
           <img src="../../assets/images/search.png" class="w-18 h-18" alt="">
           <input type="search" name="search" v-model="searchInput" @input="getItems" placeholder="Qidiruv" class="placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm">
         </div> -->
         <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button" @click="openModal">
           <img class="w-24 h-24" src="@/assets/images/add-white.png" alt="">
           <p class="text-sm text-white-primary font-medium leading-21 hidden md:block">Yangi kategoriya qo‘shish</p>
         </button>
       </div>
     </div>
     
     <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-30">
       <FoodItem v-for="item in items.list" :key="item.id" :id="item.id" :name="item.name" @edit="openModal" @remove="OPEN_DELETE_MODAL({ id: item.id, text: 'Diqqat, kategoriyani o‘chirishga aminmisiz?', title: `${item.name.uz}`, url: 'category', callback: getItems })"/>
     </div>
     <!-- <base-pagination :active="Math.trunc(Number(route.query.offset)/12) + 1 || 1" :perPage="12" :items="items.count" @change="(val:number) => changeQuery({key: 'offset', value: (val - 1)*12})"/> -->
     <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: getItems })"/>
   </div>
   </template>
       