<template>
  <IndexPage />
</template>

<script>
import IndexPage from '@/pages/IndexPage.vue';

export default {
  name: 'App',
  components: {
    IndexPage,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/normalize.css";
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

html {
  height: 100%;
}

body {
  font-family: $font-family-text;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
}

.bg-line {
  position: absolute;
  top: -10px;
  background: #E6E6E6;
  border: none;
  outline: none;
  min-height: 100%;
  width: 1px;
  z-index: -10;
  box-sizing: border-box;

  &:first-of-type {
    left: $boundary-position-bg-line;
  }

  &:nth-child(2) {
    left: calc($boundary-position-bg-line + 400px);
  }

  &:nth-child(3) {
    right: calc($boundary-position-bg-line + 400px);
  }

  &:last-of-type {
    right: $boundary-position-bg-line;
  }
}

.center {
  padding-left: calc(50% - $site-half-width);
  padding-right: calc(50% - $site-half-width);
}

.container {
  max-width: $site-width;
  margin: 0 auto;
}

  // for linter error without content in anchor
.hide {
  display: none;
  visibility: hidden;
  position: absolute;
}

</style>
