<template>
  <section class="blog center" id="app">
    <h3 class="blog__heading blog__heading_align-left">Articles & News</h3>

    <div class="blog-articles-wrapper mt30">
      <BlogPageArticle
        v-for="(article, index) in articles" :key="index"
        :article="article"
      />
    </div>

    <PagePagination :numberOfPages="numberOfPages"/>
  </section>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import BlogPageArticle from '@/blocks/BlogPageArticle.vue';
import PagePagination from '@/blocks/PagePagination.vue';

export default {
  name: 'BlogPageArticles',
  components: {
    BlogPageArticle,
    PagePagination,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      numberOfPages: 3,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.blog {

  &__header {
    margin: 0 auto 52px;
    max-width: 811px;
  }

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    text-align: center;
    font-size: 50px;
    line-height: 62px;
    letter-spacing: 1px;
    margin: 0 0 12px 0;

    &_align-left {
      text-align: left;
    }
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    text-align: center;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 0;
  }
}

.blog-articles-wrapper {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  grid-auto-flow: row dense;
  gap: 30px 27px;
}
</style>
