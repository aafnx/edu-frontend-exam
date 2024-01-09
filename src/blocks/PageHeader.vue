<script>
import LogoComponent from '@/components/LogoComponent.vue';

export default {
  name: 'PageHeader',
  components: {
    LogoComponent,
  },
};
</script>

<template>
  <header class="header center">
    <LogoComponent />
    <nav class="menu">
      <router-link to="/home" class="menu__link">Home</router-link>
      <router-link to="/project" class="menu__link">Project</router-link>
      <router-link to="/blog" class="menu__link">Blog</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0 57px;
}

.menu {
  display: flex;
  align-items: center;
  gap: 50px;

  &__link {
    text-decoration: none;
    color: $font-color-heading;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    transition: color 0.3s;

    &:hover {
      color: $accent-color;
    }
  }
}
</style>
