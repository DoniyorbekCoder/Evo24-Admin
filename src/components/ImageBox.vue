<script setup lang="ts">
import FormData from 'form-data'
import {reactive, computed, onMounted, ref} from 'vue'
import { uploadPhoto } from '@/services/common'
const url = import.meta.env.VITE_BASE_URL2
const emit = defineEmits(["invalidInput"])
const inputRef = ref();
function click() {
  inputRef.value.click()
}
function sendEmit() {
  emit("invalidInput")
}
const data = reactive<{uid: number, src: string | null, file: string | null, width: number, height: number, isLocal: boolean, image: string}>({
  uid: 0,
  src: '',
  file: '',
  width: 0,
  height: 0,
  isLocal: false,
  image: ''
})

const getImageURL = computed(() => {
  let result;
      if (data.isLocal) {
        result = data.src
      } else {
        if (data.src) {
          result = `${data.src}`
        }
      }
  return result
})
onMounted(() => {
  data.uid = Math.random()
})

async function  imageSelected(e: any) {
  const formData = new FormData();
  if (!e.target.files[0]) {
    return
  }
  formData.append("file", e.target.files[0]);

  await uploadPhoto(formData).then(res => {
    data.image = `${res[1].data}`
    data.src = `${url}${res[1].data}`
  })
}

function  setImage(src: string) {
  if(src === null ) {
    data.src = src
    data.image = src
  } else {
  data.src = `${url}${src}`
  data.image = src
  data.isLocal = false
  }
}

function getImage() {
  return data.image
}
defineExpose({
  setImage,
  getImage
})
</script>

<template>
  <div>
    <div class="relative h-full w-full rounded flex items-center justify-center" @click="click" >
      <img v-if="data.src" :id="`${data.uid}`" :src="`${getImageURL}`" alt="" class="object-cover opacity-50 h-full w-full rounded">
      <div class="absolute flex flex-col items-center justify-center">
        <i :class="data.src ? 'icon-edit-1': 'icon-camera'" />
        <!-- <p class="text-sm leading-17 mt-5">Passport rasmi</p> -->
      </div>
    </div>
    <input ref="inputRef" name="image" @invalid="sendEmit" type="file" hidden accept="image/*" @change="imageSelected" :required="data.src ? false : true">
  </div>
</template>