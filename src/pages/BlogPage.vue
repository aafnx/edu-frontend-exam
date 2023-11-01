<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div>
    <div class="wrapper">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <PageHeader />

      <BannerPage :bannerData="bannerData" />

      <LatestPost />

      <BlogPageArticles :articles="articles" />
    </div>
    <PageFooter />
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import PageHeader from '@/blocks/PageHeader.vue';
import PageFooter from '@/blocks/PageFooter.vue';
import BannerPage from '@/blocks/BannerPage.vue';
import BlogPageArticles from '@/blocks/BlogPageArticles.vue';
import LatestPost from '@/blocks/LatestPost.vue';

export default {
  name: 'BlogPage',
  components: {
    BlogPageArticles,
    PageHeader,
    PageFooter,
    BannerPage,
    LatestPost,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      bannerData: {
        title: 'Articles & News',
        subtitle: 'Home / Blog',
        pageName: 'Blog',
      },
    };
  },
};
</script>

<style scoped lang="scss">
</style>
