<script setup lang="ts">
</script>

<template>
<teleport to='body'>
    <div class="w-screen h-full overflow-auto flex items-start justify-center fixed top-0 right-0 modalBg">
          <!-- Modal Content -->
          <slot/>
    </div>
</teleport>
</template>


<style scoped>
    .modalBg {
        background: rgba(1, 14, 56, 0.25);
        backdrop-filter: blur(5px);
    }
</style>