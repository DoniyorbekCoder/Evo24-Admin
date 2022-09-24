<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { Category } from '@/services/category'
import { getCategories } from '@/services/category'
import { _deleteModal, _loading, _toast, OPEN_DELETE_MODAL, OPEN_LOADING_MODAL, CLOSE_LOADING_MODAL, OPEN_NOTIFICATION} from '@/store'
const route = useRoute()
const router = useRouter()
const AboutItem = defineAsyncComponent(() => import('./AboutItem.vue'));
const TheModal = defineAsyncComponent(() => import('./TheModal.vue'))

const items = ref<{isLoading: boolean, list: Category[]}>({
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
    // const [error, response] = await getCategories(searchInput.value)
    const [error, response] = await getCategories()
    CLOSE_LOADING_MODAL()
    items.value.list = response
}

function openModal(val: any) {
  modalRef.value.open(val)
}
getItems()
</script>
<template>
<div class="fixed top-0 bottom-0 right-0 w-full overflow-y-scroll bg-white-primary">
  <about-item :id="items.list[0].id" :name="items.list[0].name" @edit="openModal" />

  <!-- <base-pagination :active="Math.trunc(Number(route.query.offset)/12) + 1 || 1" :perPage="12" :items="items.count" @change="(val:number) => changeQuery({key: 'offset', value: (val - 1)*12})"/> -->
  <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: getItems })"/>
</div>
</template>