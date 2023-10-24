<script>
import BlogArticle from '@/blocks/BlogArticle.vue';
import articleImg1 from '@/assets/img/blog-photo-1.jpg';
import articleImg2 from '@/assets/img/blog-photo-2.jpg';
import articleImg3 from '@/assets/img/blog-photo-3.jpg';
import articleImg4 from '@/assets/img/blog-photo-4.jpg';
import articleImg5 from '@/assets/img/blog-photo-5.jpg';
import articleImg6 from '@/assets/img/blog-photo-6.jpg';

export default {
  name: 'MainPageBlog',
  components: {
    BlogArticle,
  },
  data: () => ({
    articles: [
      {
        title: 'Let’s Get Solution For Building Construction Work',
        tag: 'Kitchan Design',
        img: {
          src: articleImg1,
          alt: 'Kitchan design',
        },
        date: '26 December,2022',
      },
      {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        tag: 'Living Design',
        img: {
          src: articleImg2,
          alt: 'Living Design',
        },
        date: '22 December,2022',
      },
      {
        title: 'Best For Any Office & Business Interior Solution',
        tag: 'Interior Design',
        img: {
          src: articleImg3,
          alt: 'Interior Design',
        },
        date: '25 December,2022',
      },
      {
        title: 'Let’s Get Solution For Building Construction Work',
        tag: 'Kitchan Design',
        img: {
          src: articleImg4,
          alt: 'Kitchan design',
        },
        date: '26 December,2022',
      },
      {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        tag: 'Living Design',
        img: {
          src: articleImg5,
          alt: 'Living Design',
        },
        date: '22 December,2022',
      },
      {
        title: 'Best For Any Office & Business Interior Solution',
        tag: 'Interior Design',
        img: {
          src: articleImg6,
          alt: 'Interior Design',
        },
        date: '25 December,2022',
      },
    ],
  }),
  methods: {
    limitDisplayArticles(index, limit) {
      return index < limit;
    },
  },
  computed: {
    showThreeBlogArticles() {
      return [...this.articles].filter((_, index) => index < 3);
    },
  },
};
</script>

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
        v-for="(article, index) in showThreeBlogArticles"
        :key="index"
        :articleData="article"
      />
    </div>
  </section>
</template>

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
