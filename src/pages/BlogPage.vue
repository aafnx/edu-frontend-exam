<script>
import PageHeader from '@/blocks/PageHeader.vue';
import PageFooter from '@/blocks/PageFooter.vue';
import BlogPageArticles from '@/blocks/BlogPageArticles.vue';

export default {
  name: 'BlogPage',
  components: {
    BlogPageArticles,
    PageHeader,
    PageFooter,
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
  <div>
    <div class="wrapper">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
    <PageHeader />

      <section class="blog-banner">
        <div class="blog-banner__wrapper container">
          <header class="blog-banner__header">
            <h1 class="blog-banner__heading">Articles & News</h1>
            <p class="blog-banner__text">Home / Blog</p>
          </header>
        </div>
      </section>

      <section class="latest-post center">
        <h3 class="latest-post__heading">Latest Post</h3>
        <article class="latest-post__article">
          <img src="@/assets/img/latest-post.jpg" alt="latest post" class="latest-post__img">
          <div class="latest-post__content">
            <h4 class="latest-post__title">Low Cost Latest Invented Interior Designing Ideas</h4>
            <p class="latest-post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu
              sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
              <br>
              <br>
              Lorem Ipsum is not simply random text. It
              has roots in a piece of classica.
            </p>
            <div class="latest-post__wrapper">
              <time class="latest-post__date">26 December,2022</time>
              <a href="#" class="latest-post__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                  <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                  <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                        stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="hide">button</span>
              </a>
            </div>
          </div>
        </article>
      </section>

      <BlogPageArticles :articles="articles" />
    </div>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.blog-banner {
  background: center / cover no-repeat url("@/assets/img/blog-banner.jpg");

  &__wrapper {
    position: relative;
    min-height: 356px;
  }

  &__header {
    position: absolute;
    left: 350px;
    bottom: 0;
    padding: 41px 78px;
    background-color: #fff;
    border-radius: 37px 37px 0 0;
  }

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    font-size: 50px;
    margin: 0;
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 0;
    text-align: center;
  }
}

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
  }

  &__img {
    border-radius: 50px;
    background: #C4C4C4;
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
