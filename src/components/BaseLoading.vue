<script setup lang="ts">
import Modal from './GlobalModal.vue';
import { _loading } from '@/store/theLoading'
</script>

<template>
  <Modal v-if="_loading.visible">
    <div class="box">
      <svg><circle cx="50" cy="50" r="50"></circle></svg>
    </div>
  </Modal>
</template>


<style scoped>
.box {
  display: flex;
  background: #fff;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}

svg {
  position: relative;
  width: 110px;
  height: 110px;
  animation: rotate 2s linear infinite;
}

svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 7;
  stroke: #5157ff;
  stroke-linecap: round;
  stroke-dasharray: 320;
  stroke-dashoffset: 320;
  transform: translate(5px, 5px);
  animation: animate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(720deg);
  }
}

@keyframes animate {

  0%,
  100% {
    stroke-dashoffset: 320;
  }

  50% {
    stroke-dashoffset: 0;
  }

  50.1% {
    stroke-dashoffset: 640;
  }
}
</style>