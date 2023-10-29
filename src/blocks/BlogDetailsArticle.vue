<script>
export default {
  name: 'BlogDetailsArticle',
  props: {
    articleData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <article class="article">
    <h3 class="article__title">
      {{ articleData.title }}
    </h3>
    <img :src="articleData.img.src" :alt="articleData.img.alt" class="article__img mt21">
    <div class="flexbox-jcsb mtb46">
      <time class="article__date"> {{ articleData.date }}</time>
      <div class="article__pagination">
        {{ articleData.pagination }}
      </div>
    </div>
    <p class="article__text" v-for="(text, index) in articleData.paragraphs" :key="index">
      {{ text }}
    </p>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.article {
  &__title {
    @include font($font-family-heading, $font-color-heading);
    font-size: 50px;
    line-height: 62px;
    letter-spacing: 1px;
  }

  &__img {
    display: block;
    height: 540px;
    width: 100%;
    border-radius: 50px;

    &_subarticle {
      height: 365px;
    }
  }

  &__date {
    @include font($font-family-text, $font-color-text);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }

  &__pagination {
    @extend .article__date;
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 15px 0 0;
  }

  &__list {
    @extend .article__text;
    list-style-position: outside;
    padding: 0 0 0 30px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 24px 0 44px 0;
  }

  &__list-item::marker {
    @include font($font-family-heading, $accent-color);
  }
}
</style>
