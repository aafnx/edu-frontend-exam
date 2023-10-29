<script>
import BlogPageArticle from '@/blocks/BlogPageArticle.vue';

export default {
  name: 'BlogPageArticles',
  components: {
    BlogPageArticle,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <section class="blog center" id="app">
    <h3 class="blog__heading blog__heading_align-left">Articles & News</h3>

    <!--Карточки через Vue-->
    <div class="blog-articles-wrapper mt30">
      <BlogPageArticle
        v-for="(article, index) in articles" :key="index"
        :article="article"
      />
    </div>
    <nav class="page-pagination">
      <button class="page-pagination__item page-pagination__item_active">
        <span class="page-pagination__number">1</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
          <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
        </svg>
      </button>
      <button class="page-pagination__item">
        <span class="page-pagination__number">2</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
          <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
        </svg>
      </button>
      <button class="page-pagination__item">
        <span class="page-pagination__number">3</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
          <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
        </svg>
      </button>
      <button class="page-pagination__item">
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
          <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
          <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

    </nav>
  </section>
</template>

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

.page-pagination {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 51px 0 0;

  &__item {
    position: relative;
    display: block;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    width: 52px;
    height: 52px;
    @include go-to-page-btn;

    & svg {
      width: inherit;
      height: inherit;
    }

    &_active svg circle {
      fill: $experience-block-bgc;
      stroke: none;
    }
  }

  &__number {
    position: absolute;
    top: 18px;
    left: 22px;
  }
}

</style>
