<script>
export default {
  name: 'BlogArticle',
  props: {
    articleData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
    <article class="blog-article">
      <div class="blog-article__top">
        <img :src="articleData.img.src" :alt="articleData.img.alt" class="blog-article__img">
        <p class="blog-article__tag"> {{ articleData.tag }}</p>
      </div>
      <h3 class="blog-article__title">
        {{ articleData.title }}
      </h3>
      <footer class="blog-article__footer">
        <time class="blog-article__date">{{ articleData.date }}</time>
        <a href="#" class="blog-article__btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="hide">button</span>
        </a>
      </footer>
    </article>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.blog-article {

  &:hover {
    background-color: $experience-block-bgc;
  }

  &:hover svg circle {
    fill: #FFF;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px;
  border: 1px solid #E7E7E7;
  border-radius: 62px;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
  max-width: 382px;
  box-sizing: border-box;

  &__top {
    position: relative;
    margin: 0 0 15px 0;
  }

  &__img {
    border-radius: 45px 45px 0 0;
    width: 340px;
    height: 289px;
  }

  &__tag {
    @include font($font-family-text, $font-color-text);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    border-radius: 8px 8px 8px 0;
    background: #FFF;
    width: 124px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;
    bottom: 20px;
  }

  &__title {
    @include font($font-family-heading, $font-color-heading);
    font-size: 25px;
    line-height: 31px;
    letter-spacing: 0.5px;
    max-width: 300px;
    margin: 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0;
  }

  &__date {
    @include font($font-family-text, $font-color-text);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }

  &__btn {
    @include go-to-page-btn;
  }
}
</style>
