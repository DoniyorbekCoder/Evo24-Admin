<script setup lang="ts">
   import { postPutCategory, reset } from '@/services/category';
   import type { Category, Form } from '@/services/category'
   import { defineAsyncComponent, reactive, ref } from 'vue'
   import { tabs } from '@/services/data';
   const imageRef = ref()
   const emit = defineEmits(["submit", "toast"])
   const title = reactive({
     data: {
       code: 'uz',
       title: 'Sarlavha',
       lang: 'O‘zbek tilida',
       author: 'Muallif',
       comment: 'Fikr-mulohaza',
       index: 1,
     }
   })
   const data = reactive<{ display: boolean, formInfo: Form, error: boolean, msg: string }>({
     display: false,
     error: false,
     msg: '',
     formInfo: {
       id: 0,
       name: { uz: '', ru: '', eng: '' },
       priority: 0,
       active: null,
       foods: [],
     }
   });
   
   async function assign(item: Category) {
     Object.assign(data.formInfo, item)
   }
   
   function open(item: Category) {
     title.data = tabs[0]
     data.display = true
     if (item.id !== undefined) {
       assign(item)
     } else {
       reset(data.formInfo)
     }
   }
   
   async function submit() {
     emit("submit")
     data.display = false
     postPutCategory(data.formInfo).then((res) => {
       if(data.formInfo.id && res[1] !== null) {
         emit('toast', 'Kategoriya yangilandi')
       } else if(res[1] !== null) {
         emit('toast', 'Yangi kategoriya qo‘shildi')
       } 
     })
   }
   
   function showError() {
     data.msg="Iltimos, kategoriya suratini joylang!"
     data.error = true
     setTimeout(() => {
       data.error = false
     }, 3000);
   }
   
   defineExpose({
     open
   })
   </script>
   
   <template>
     <Modal v-if="data.display">
       <div class="openModal h-screen flex items-center justify-center fixed top-0 left-0 w-full">
         <div class="bg-white-primary p-20 md:p-30 shadow-lg rounded-15 z-0 space-y-30 min-w-480" :class="data.display ? 'z-0 scale-100 animate-blowUp' : ''">
           <div class="flex items-center justify-between">
             <h2 class="text-xl font-semibold text-black-primary">{{ data.formInfo.id === null ? 'Yangi kategoriya qo‘shish' : 'Tahrirlash' }}</h2>
             <img @click="reset(data.formInfo); data.display = false" src="@/assets/images/close-black.png"
               class="cursor-pointer w-24 h-24" alt="">
           </div>
   
           <form action="" @submit.prevent="submit" class="w-full space-y-30">
             <div v-if="data.error" class="text-red-primary mb-15">
               {{data.msg}}
             </div>
             <div class="flex items-end gap-15 mb15">
               <input type="text"  v-model="data.formInfo.priority" class="border border-gray-secondary w-100 bg-white-secondary text-sm leading-21 rounded py-15 px-20 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" placeholder="Priority" />
               <div class="flex items-center gap-10">
                 <p class="">Active: </p>
                 <label class="switch">
                   <input type="checkbox" :checked="data.formInfo.active" @click="data.formInfo.active = !data.formInfo.active">
                   <span class="slider round"></span>
                 </label>
               </div>
             </div>
             
             <div class="grid gap-10">
               <!-- <input type="text" v-for="(item, index) in data.formInfo.name" :key="index" v-show="parseFloat(index) == show" v-model="data.formInfo.name[index]" class="border border-gray-secondary mt-15 w-full bg-white-secondary text-sm leading-21 rounded py-15 px-20 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" :placeholder="title.data.title" :required="title.data.lang === 'O‘zbek tilida' ? true : false" /> -->
               <input type="text"  v-model="data.formInfo.name.uz" class="border border-gray-secondary w-full bg-white-secondary text-sm leading-21 rounded py-15 px-20 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" placeholder="Sarlavha" required>
               <input type="text"  v-model="data.formInfo.name.eng" class="border border-gray-secondary w-full bg-white-secondary text-sm leading-21 rounded py-15 px-20 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" placeholder="Title" required>
               <input type="text"  v-model="data.formInfo.name.ru" class="border border-gray-secondary w-full bg-white-secondary text-sm leading-21 rounded py-15 px-20 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" placeholder="Название" required>
             </div>
   
             <!-- <div class="inline-flex border border-gray-secondary bg-white-secondary rounded-30 mt-15">
               <div v-for="(item) in tabs" :key="item.code" class="cursor-pointer text-sm px-30 py-12 rounded-30" :class="title.data.code === item.code ? 'bg-blue-primary text-white-primary': 'text-black-secondary'" @click="title.data = item;">
                 {{item.lang}}
               </div>
             </div> -->
   
             <button
               class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded text-sm font-medium text-white-primary leading-21 mt-30"
               role="button" type="submit">{{ data.formInfo.id === null ? 'Qo‘shish' : 'O‘zgarishlarni saqlash' }}</button>
           </form>
         </div>
       </div>
     </Modal>
   </template>