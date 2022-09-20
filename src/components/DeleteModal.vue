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
      <div class="bg-white-primary p-30 shadow-lg rounded-15 w-400" :class="_deleteModal.visible ? 'z-0 scale-100 animate-blowUp': ''">
        <div class="flex items-start justify-between">
          <div class="bg-red-secondary border border-red-primary w-60 h-60 flex items-center justify-center rounded-full">
            <img src="@/assets/images/delete.png" class="w-30 h-30" alt="">
          </div>
          <img src="@/assets/images/close-black.png" class="cursor-pointer icon-close w-24 h-24" @click="CLOSE_DELETE" />
        </div>
        <div class="flex flex-col my-30">
          <p class="text-lg font-semibold text-black-primary">{{_deleteModal.text}}</p>
          <p class="text-sm text-black-secondary leading-4 py-1.5 break-words">{{_deleteModal.title}}</p>
        </div>
        <button @click="submit" class="font-medium px-30 py-15 bg-red-primary text-white-primary rounded" type="button">O‘chirish</button>
      </div>
    </div>
  </Modal>
</template>


<style scoped>
  .deleteBg {
    background: rgba(234, 234, 234, 0.7);
  }
</style>