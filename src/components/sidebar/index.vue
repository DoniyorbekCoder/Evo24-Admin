<script setup lang="ts">
import links from './links.json';
const src = ['icon-category', 'icon-book', 'icon-video', 'ri-mic-2-fill', 'icon-question', 'icon-article', 'icon-image', 'icon-person', 'icon-disciple', 'icon-comment', 'icon-folder', 'icon-building', 'icon-university', 'icon-forum', 'icon-award', 'icon-organization', 'icon-work', 'ri-bookmark-fill', 'icon-link']
</script>

<template>
  <aside class="w-full p-10 md:p-20 lg:p-30 bg-white-primary min-h-screen">
      <router-link to="/">
        <div role="button" class="flex items-center gap-10">
          <img src="../../assets/images/icon.svg" alt="" />
          <!-- <h2 class="font-medium text-xl text-black-primary">Ishonchim</h2> -->
        </div>
      </router-link>
      <div class="text-sm font-medium flex flex-col gap-y-20 md:gap-y-25 lg:gap-y-30 mt-40 link">
        <router-link v-for="(link, index) in links.links" :to="link.path" :key="link.path" class="flex text-black-secondary items-center" active-class="router-link-active">
          <i :class="src[index]" style="font-size: 20px; line-height: 20px;" class="text-gray-icon"></i>
          <p class="pl-10 text-sm font-medium">{{link.content}}</p>
        </router-link>
      </div>
    </aside>
</template>

<style scoped>
i {
  color: #C4C4C4;
}

p {
  color: #4D5674;
}

.router-link-active i{
  color: #6D71F9;
}

.router-link-active p {
  color: #010E38;
}
</style>