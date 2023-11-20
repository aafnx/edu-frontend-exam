<script>
export default {
  name: 'LogoComponent',
};
</script>

<template>
  <router-link to='/home' class="logo">
    <img src="../assets/img/logo.svg" alt="logo" class="logo__img">
    <span class="logo__text">Interno</span>
  </router-link>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.logo {
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: center;

  &__text {
    @include font($font-family-heading, $font-color-heading);
    font-size: 40px;
    line-height: 50px;
  }
}

</style>
