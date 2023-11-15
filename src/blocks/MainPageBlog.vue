<template>
  <section class="blog center" id="app">
    <header class="blog__header">
      <h3 class="blog__heading">Articles & News</h3>
      <p class="blog__text">It is a long established fact that a reader will be
        distracted by the of readable content of a page when
        lookings at its layouts the points of using.</p>
    </header>

    <div class="blog-articles-wrapper">
      <BlogArticle
        v-for="(article, index) in firstThreeProjectArticles"
        :key="index"
        :articleData="article"
      />
    </div>
  </section>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import { mapGetters } from 'vuex';
import BlogArticle from '@/blocks/BlogArticle.vue';

export default {
  name: 'MainPageBlog',
  components: {
    BlogArticle,
  },
  computed: {
    ...mapGetters('articles', ['firstThreeProjectArticles']),
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.blog-articles-wrapper {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  grid-auto-flow: row dense;
  gap: 30px 27px;
}

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
</style>
