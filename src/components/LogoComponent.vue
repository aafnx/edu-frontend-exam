<script>
export default {
  name: 'LogoComponent',
  props: {
    changePage: Function,
  },
};
</script>

<template>
  <a href="index.html" class="logo" @click.prevent="changePage(0)">
    <img src="../assets/img/logo.svg" alt="logo" class="logo__img">
    <span class="logo__text">Interno</span>
  </a>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.logo {
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: center;

  &__img {
  }

  &__text {
    @include font($font-family-heading, $font-color-heading);
    font-size: 40px;
    line-height: 50px;
  }
}

</style>
