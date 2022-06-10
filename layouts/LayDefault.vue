<template>
  <div>
    <div class="head">
      <div>
        <nuxt-link to="/">
          <img :src="require('../../nort-front/assets/logo.png')" alt="«НПО НОРТ»">
        </nuxt-link>
      </div>
      <div>
        <button class="sign" @click="$refs.modal.showModal = true">
          Создать заказ
        </button>
      </div>
      <div>
        <nuxt-link to="/orders">
          <button class="sign">
            Вход в систему
          </button>
        </nuxt-link>
      </div>
      <div style="padding-right: 50px">
        <nuxt-link to="/auth">
          Авторизация
        </nuxt-link>
        /
        <nuxt-link to="/registration">
          Регистрация
        </nuxt-link>
      </div>
      <div style="padding-right: 50px; text-align: center">
        <p class="exit">
          <NuxtLink to="/account">
            Личный кабинет:
          </NuxtLink>
        </p>
        <p class="exit" @click="exit">
          Выход
        </p>
      </div>
    </div>

    <Nuxt class="wrapper" />

    <div class="foot">
      <div class="footNort">
        «НПО НОРТ»
      </div>
      <div class="footNort">
        1993 - {{ year }}
      </div>
    </div>
    <add-orders-modals ref="modal" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'LayDefault'
})
export default class LayDefault extends Vue {
  private year: number = new Date().getFullYear()

  private exit () {
    return this.$auth.logout()
  }
}

</script>
<style scoped>

</style>
