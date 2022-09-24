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
      lang: 'O‘zbek tili',
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
      if (data.formInfo.id && res[1] !== null) {
         emit('toast', 'Kategoriya yangilandi')
      } else if (res[1] !== null) {
         emit('toast', 'Yangi kategoriya qo‘shildi')
      }
   })
}

defineExpose({
   open
})
</script>
   
<template>
   <Modal v-if="data.display">
      <div class="h-screen flex items-center justify-center fixed top-0 left-0 w-full">
         <div class="bg-white-primary p-20 md:p-32 shadow-lg rounded-16 z-0 w-570" :class="data.display ? 'z-0 scale-100 animate-blowUp' : ''">
            <div class="flex items-center gap-8 mb-32">
               <div @click="reset(data.formInfo); data.display = false" class="cursor-pointer w-49 h-49 flex items-center justify-center rounded-full bg-white-secondary border border-gray-secondary">
                  <img class="w-19 h-19" src="@/assets/images/arrow-left.png" alt="">
               </div>
               <h2 class="text-base text-black-primary">{{ data.formInfo.id === null ? 'Yangi qo‘shish' : 'Foydalanuvchi tahrirlash' }}</h2>
            </div>

            <form action="" @submit.prevent="submit" class="w-full">
               <div class="w-full relative col-span-2 mb-16">
                  <input type="text" class="border border-gray-secondary w-full bg-white-secondary text-sm leading-17 rounded py-16 px-21 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" required />
                  <label class="label font-medium transition-all text-sm inline leading-17 text-black-secondary absolute top-15 left-25">Foydalanuvchi ismi</label>
               </div>
               <div class="w-full relative">
                  <input type="number" class="border border-gray-secondary w-full bg-white-secondary text-sm leading-17 rounded py-16 px-21 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" required />
                  <label class="label font-medium transition-all text-sm inline leading-17 text-black-secondary absolute top-15 left-25">Telefon raqam</label>
               </div>

               <button class="flex items-center gap-8 px-32 py-16 bg-yellow-primary rounded mt-32" role="button" type="submit">
                  <img class="w-21 h-21" src="@/assets/images/save.png" alt="">
                  <p class="font-semibold text-sm text-black-primary uppercase">{{ data.formInfo.id === null ? 'Qo‘shish' : 'O‘zgarishlarni saqlash' }}</p>
               </button>
            </form>
         </div>
      </div>
   </Modal>
</template>
   
<style scoped>
input:focus+label,
input:valid+label {
   top: 7px;
   left: 21px;
   font-size: 8px;
   line-height: 10px;
   letter-spacing: 0.5px;
}
</style>