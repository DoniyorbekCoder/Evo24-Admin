<script setup lang="ts">
import { handleAuth } from "@/services/common";
import { reactive } from "@vue/reactivity";
import router from '@/router'
const data = reactive<{username: string, password: string, passwordError: string}>({
  username: '',
  password: '',
  passwordError: '',
})

function handleSubmit() {
  if (data.passwordError === '') {
    handleAuth(data).then(res => {
      if (res[0] === null) {
        sessionStorage.setItem('token', res[1].token)
        router.push('/')
      } else {
        data.passwordError = 'Parol yoki foydalanuvchi nomi xato'
        setTimeout(() => {
          data.passwordError = ''
        }, 3000)
        router.push('/login')
      }
    })
  }
}
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center login">
    <div class="bg-white-primary p-30 rounded-15 min-w-480">
      <form action="" method="post" @submit.prevent="handleSubmit">
        <div class="flex flex-col">
          <p class="font-vibes text-xxl text-blue-primary mb-15">Evo24 · Admin</p>
          <p v-if="data.passwordError !== ''" class="text-red-primary mb-12">{{data.passwordError}}</p>
          <div class="w-full relative mb-15">
            <input class="w-full rounded text-sm leading-17 text-black-secondary border border-gray-secondary focus:outline-none bg-gray-secondary h-51 px-20 py-12" v-model="data.username" type="text" name="username" id="username" required  autocomplete="off">
            <label class="label transition-all text-sm leading-17 w-full text-black-secondary absolute top-15 left-25" for="username">Foydalanuvchi</label>
          </div>
          <div class="w-full relative mt-15">
            <input class="w-full rounded text-sm leading-17 text-black-secondary border border-gray-secondary focus:outline-none bg-gray-secondary h-51 px-20 py-12" v-model="data.password" type="password" name="password" id="password" required>
            <label class="label transition-all text-sm leading-17 w-full text-black-secondary absolute top-15 left-25" for="password">Parol</label>
          </div>
        </div>
        <button class="px-30 mt-30 py-15 bg-blue-primary text-white-primary rounded" type="submit">Tizimga kirish</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

input:focus + label,
input:valid + label{
  top: 7px;
  left: 20px;
  font-size: 8px;
  line-height: 10px;
}

/* .login {
  background-image: url('@/assets/images/login.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>