<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/sidebar/index.vue'

import router from '@/router'
import { reactive, defineAsyncComponent } from 'vue';

const data = reactive<{token: string | null}>({
  token: null
})
function handleUser() {
  data.token = sessionStorage.getItem('token')
  if (data.token === null) {
    router.push('/login')
    setTimeout(handleUser, 100)
  }
}
// handleUser()
</script>

<template>
  <div class="flex relative w-full">
    <Sidebar class="w-250 fixed top-0 bottom-0 border-r border-gray-secondary" />
    <RouterView class="width fixed top-0 bottom-0 right-0 flex-auto px-30 lg:px-72 pt-20 lg:pt-30 pb-30 overflow-y-scroll" />
    <!-- <Sidebar v-if="data.token != null" class="fixed top-0 bottom-0 overflow-y-scroll" :class="data.token != null ? 'w-250' : 'w-0'" /> -->
    <!-- <RouterView class="fixed top-0 bottom-0 right-0 flex-auto px-30 lg:px-72 pt-20 lg:pt-30 pb-40 overflow-y-scroll" :class="data.token != null ? 'width' : 'w-full'" /> -->
  </div>
  <delete-modal />
  <base-loading />
  <base-notification />
</template>

<style scoped>
.width {
  width: calc(100% - 250px);
}
</style>
