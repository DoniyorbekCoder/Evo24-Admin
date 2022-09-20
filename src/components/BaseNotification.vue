<script setup lang="ts">
import { _toast } from '@/store/theToast'
</script>
<template>
  <teleport to="body">
    <div v-if="_toast.visible" class="fixed w-screen flex justify-center left-0 bottom-0 mb-60">
      <div class="text-green-primary rounded-15 flex gap-15 items-center bg-white-primary border border-green-primary p-15 shadow-lg">
        <div class="bg-green-secondary w-54 h-54 flex items-center justify-center rounded-full">
          <img src="@/assets/images/tick.svg" alt="">
        </div>
        <p class="text-base font-medium self-center">{{_toast.text}}</p>
      </div>
    </div>
  </teleport>
</template>
