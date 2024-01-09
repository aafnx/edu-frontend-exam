<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <section class="latest-post center">
        <h3 class="latest-post__heading">Latest Post</h3>
        <article class="latest-post__article">
          <img :src="latestPostData.img.src" :alt="latestPostData.img.alt" class="latest-post__img">
          <div class="latest-post__content">
            <h4 class="latest-post__title">{{ latestPostData.title }}</h4>
            <p class="latest-post__text">{{ latestPostData.paragraphs[0] }}</p>
            <div class="latest-post__wrapper">
              <time class="latest-post__date">{{ latestPostData.date }}</time>
              <router-link to="/blog-details" class="latest-post__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                viewBox="0 0 52 53" fill="none">
                  <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                  <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                  stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </router-link>
            </div>
          </div>
        </article>
      </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LatestPost',
  computed: {
    ...mapGetters('articles', ['blogArticles']),
    latestPostData() {
      return this.blogArticles.at(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.latest-post {
  margin: 200px 0 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 27px;

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    font-size: 50px;
    line-height: 62px;
    letter-spacing: 1px;
    margin: 0;
  }

  &__article {
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
    padding: 22px;
    display: flex;
    gap: 65px;
    height: 522px;
    box-sizing: border-box;
  }

  &__img {
    border-radius: 50px;
    background: #C4C4C4;
    max-height: 478px;
    max-width: 569px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 51px 34px 51px 0;
  }

  &__title {
    @include font($font-family-heading, $font-color-heading);
    font-size: 25px;
    line-height: 31px;
    letter-spacing: 0.5px;
    margin: 0;
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 22px 0 41px;
    overflow: hidden;
    position: relative;
    max-height: 300px;
    &::after {
      content: "";
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 1.2em;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 100%);
      pointer-events: none;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
