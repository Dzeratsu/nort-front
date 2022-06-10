<template>
  <div style="padding-top: 100px">
    <div class="card">
      <h1 style="color:white;">
        Авторизация
      </h1>
      <p>Введите ваш логин</p>
      <input v-model="authData.login">
      <p>Введите пароль</p>
      <input v-model="authData.password" type="password">
      <button :disabled="validation" @click="login()">
        Вход
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
export interface Ilogin {
  login: string
  password: string
}
@Component({
  name: 'auth',
  layout: 'LayDefault'
})
export default class auth extends Vue {
  private authData: Ilogin = {
    login: '',
    password: ''
  }

  private async login () {
    await this.$auth.loginWith('local', this.authData)
  }
}

</script>
<style scoped>

</style>
