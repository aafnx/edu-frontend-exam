<script>
import PageHeader from '@/blocks/PageHeader.vue';
import PageFooter from '@/blocks/PageFooter.vue';
import BlogDetailsFeed from '@/blocks/BlogDetailsFeed.vue';

export default {
  name: 'BlogDetailsPage',
  components: {
    BlogDetailsFeed,
    PageFooter,
    PageHeader,
  },
  props: {
    changePage: Function,
  },
};
</script>

<template>
  <div>
  <div class="wrapper">
    <hr class="bg-line">
    <hr class="bg-line">
    <hr class="bg-line">
    <hr class="bg-line">
    <PageHeader :changePage="changePage"/>
    <header class="blog-details-banner">
    </header>
    <main class="center" id="app">
      <BlogDetailsFeed :changePage="changePage"/>
    </main>
  </div>
  <PageFooter />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.blog-details-banner {
  background: center / cover no-repeat url("@/assets/img/blog-details-banner.jpg");
  min-height: 351px;
}
</style>
