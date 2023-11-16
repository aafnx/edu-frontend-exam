<template>
  <div id="app">
    <IndexPage v-if="currentPage === 0" />
    <BlogPage v-else-if="currentPage === 1" />
    <BlogDetailsPage v-else-if="currentPage === 2" />
    <ProjectPage v-else-if="currentPage === 3" />
    <ProjectDetailsPage v-else-if="currentPage === 4" />
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import { mapGetters } from 'vuex';
import IndexPage from '@/pages/IndexPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue';

export default {
  name: 'App',
  components: {
    BlogDetailsPage,
    BlogPage,
    IndexPage,
    ProjectPage,
    ProjectDetailsPage,
  },
  data: () => ({
    currentPage: 4,
  }),
  computed: {
    ...mapGetters('articles', ['articles']),
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

.mt30 {
  margin: 30px 0 0;
}

.mt21 {
  margin: 21px 0 0;
}

.mt46 {
  margin: 46px 0 0;
}

.mtb46 {
  margin: 46px 0;
}

.mb108 {
    margin-bottom: 108px;
}

.mb20 {
  margin-bottom: 20px;
}

.flexbox-jcsb {
  display: flex;
  justify-content: space-between;
}

  // for linter error without content in anchor
.hide {
  display: none;
  visibility: hidden;
  position: absolute;
}
</style>
