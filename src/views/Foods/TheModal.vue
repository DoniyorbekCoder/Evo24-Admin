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

defineExpose({
 open
})
</script>

<template>
  <Modal v-if="data.display">
    <div class="h-screen flex items-center justify-center fixed top-0 left-0 w-full">
      <div class="bg-white-primary p-20 md:p-32 shadow-lg rounded-16 z-0 space-y-16 w-570" :class="data.display ? 'z-0 scale-100 animate-blowUp' : ''">
        <div class="flex items-center gap-8">
          <div @click="reset(data.formInfo); data.display = false" class="cursor-pointer w-49 h-49 flex items-center justify-center rounded-full bg-white-secondary border border-gray-secondary">
            <img class="w-19 h-19" src="@/assets/images/arrow-left.png" alt="">
          </div>
          <h2 class="text-base text-black-primary">{{ data.formInfo.id === null ? 'Yangi qo‘shish' : 'Taomni tahrirlash' }}</h2>
        </div>

        <form action="" @submit.prevent="submit" class="w-full space-y-32">
          <div class="flex items-center gap-16">
            <base-image alt="photo" class="w-146 h-146 shrink-0 object-cover rounded-4 bg-white-primary border border-gray-secondary" />
            <div class="space-y-20">
              <div class="flex items-center gap-16">
                <div class="w-50% relative">
                  <input type="number" v-model="data.formInfo.priority" class="border border-gray-secondary w-full bg-white-secondary text-sm leading-17 rounded p-16 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" />
                  <label class="label font-medium transition-all text-sm inline leading-17 text-black-secondary absolute top-15 left-16">Prioritet</label>
                </div>
                <div class="w-50% relative">
                  <!-- <input type="number" v-model="data.formInfo.priority" class="border border-gray-secondary w-full bg-white-secondary text-sm leading-17 rounded py-16 px-21 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" /> -->
                  <select class="border border-gray-secondary w-full bg-white-secondary text-sm leading-17 rounded p-16 focus:outline-none text-black-primary font-medium">
                    <!-- <option value="''" disabled selected>Kategoriya</option> -->
                    <option value="1">Lavash</option>
                    <option value="2">Donar</option>
                    <option value="3">Pizza</option>
                  </select>
                  <label class="label font-medium transition-all text-sm inline leading-17 text-black-secondary absolute top-15 left-16">Kategoriya</label>
                </div>
              </div>
              <div class="flex items-center gap-32">
                <div class="flex items-center gap-8">
                  <p class="">Aktiv: </p>
                  <label class="switch">
                    <input type="checkbox" :checked="data.formInfo.active" @click="data.formInfo.active = !data.formInfo.active">
                    <span class="slider round"></span>
                  </label>
                </div>
                <div class="flex items-center gap-8">
                  <p class="">Eng mashhur: </p>
                  <label class="switch">
                    <input type="checkbox" :checked="data.formInfo.active" @click="data.formInfo.active = !data.formInfo.active">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-16">
            <div class="flex gap-16 border-b-2 border-b-white-secondary">
              <div v-for="(item) in tabs" :key="item.code" class="relative top-2 cursor-pointer border-b-2 border-b-transparent text-sm py-10 rounded-30" :class="title.data.code === item.code ? 'font-semibold border-b-yellow-primary text-black-primary': ' font-normal text-black-secondary'" @click="title.data = item">
                {{item.lang}}
              </div>
            </div>

            <div class="flex flex-col gap-16">
              <div class="flex items-center gap-16">
                <div class="w-full relative" v-for="(item, index) in data.formInfo.name" :key="index" v-show="index == title.data.code">
                  <input class="border border-gray-secondary w-full bg-white-secondary text-sm leading-24 rounded p-16 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" v-model="data.formInfo.name[index]" type="text" required  autocomplete="off" />
                  <label class="label font-medium transition-all text-sm inline leading-24 text-black-secondary absolute top-15 left-16">{{title.data.title}}</label>
                </div>
                <div class="w-full relative" v-for="(item, index) in data.formInfo.name" :key="index" v-show="index == title.data.code">
                  <input class="border border-gray-secondary w-full bg-white-secondary text-sm leading-24 rounded p-16 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" v-model="data.formInfo.name[index]" type="text" required  autocomplete="off" />
                  <label class="label font-medium transition-all text-sm inline leading-24 text-black-secondary absolute top-15 left-16">{{title.data.title}}</label>
                </div>
              </div>
              <div class="w-full relative" v-for="(item, index) in data.formInfo.name" :key="index" v-show="index == title.data.code">
                <textarea class="border border-gray-secondary w-full bg-white-secondary text-sm leading-24 rounded p-16 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal resize-none" rows="4" required></textarea>
                <label class="label font-medium transition-all text-sm inline leading-24 text-black-secondary absolute top-15 left-16">{{title.data.description}}</label>
              </div>
            </div>
          </div>

          <button class="flex items-center gap-8 px-32 py-16 bg-yellow-primary rounded" role="button" type="submit">
            <img class="w-21 h-21" src="@/assets/images/save.png" alt="">
            <p class="font-semibold text-sm text-black-primary uppercase">{{ data.formInfo.id === null ? 'Qo‘shish' : 'O‘zgarishlarni saqlash' }}</p>
          </button>
        </form>
      </div>
    </div>
  </Modal>
</template>

<style scoped>
input:focus + label,
input:valid + label {
  top: 7px;
  left: 17px;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.5px;
}

select:focus + label,
select:valid + label {
  top: 7px;
  left: 17px;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.5px;
}

textarea:focus+label,
   textarea:valid+label {
      top: 7px;
      left: 21px;
      font-size: 8px;
      line-height: 10px;
      letter-spacing: 0.5px;
   }
</style>