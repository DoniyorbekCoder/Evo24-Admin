<script setup lang="ts">
import { _deleteModal, CLOSE_DELETE_MODAL, CLOSE_DELETE } from '@/store/deleteModal';
import Modal from './GlobalModal.vue';
import router from '@/router'
import { deleteItem } from '@/services/common';
const emit = defineEmits(["submit"]);
async function submit() {
  // const repsonse = await deleteItem({ id: _deleteModal.id }, _deleteModal.url).then(res => {
  // })
  // if (_deleteModal.callback === undefined) {
  //   router.go(-1)
  // }
  CLOSE_DELETE_MODAL()
}

</script>

<template>
  <Modal v-if="_deleteModal.visible">
    <div class="h-full w-full flex justify-center items-center deleteBg">
      <div class="bg-white-primary p-32 shadow-lg rounded-20 w-400" :class="_deleteModal.visible ? 'z-0 scale-100 animate-blowUp': ''">
        <div class="flex items-start justify-between">
          <div class="bg-red-secondary  w-54 h-54 flex items-center justify-center rounded-full">
            <img src="@/assets/images/delete.png" class="w-25 h-25" alt="">
          </div>
          <img src="@/assets/images/close-black.png" class="cursor-pointer w-24 h-24" @click="CLOSE_DELETE" />
        </div>
        <div class="flex flex-col my-30">
          <p class="text-lg leading-28 font-grotesk font-semibold text-black-primary">{{_deleteModal.text}}</p>
          <p class="text-sm text-black-secondary leading-4 py-1.5 break-words">{{_deleteModal.title}}</p>
        </div>
        <button @click="submit" class="flex items-center gap-8 px-32 py-16 bg-red-primary rounded" type="button">
          <img class="w-21 h-21" src="@/assets/images/delete-btn.png" alt="">
          <p class="font-semibold text-sm text-white-primary uppercase">Ha, o‘chirish</p>
        </button>
      </div>
    </div>
  </Modal>
</template>


<style scoped>
  .deleteBg {
    background: rgba(1, 14, 56, 0.25);
    backdrop-filter: blur(5px);
  }
</style>