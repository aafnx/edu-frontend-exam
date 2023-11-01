<template>
  <div id="app">
    <IndexPage v-if="currentPage === 0" :articles="articles" />
    <BlogPage v-else-if="currentPage === 1" :articles="articles" />
    <BlogDetailsPage v-else-if="currentPage === 2" />
    <ProjectPage v-else-if="currentPage === 3" />
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import IndexPage from '@/pages/IndexPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import articleImg1 from '@/assets/img/blog-photo-1.jpg';
import articleImg2 from '@/assets/img/blog-photo-2.jpg';
import articleImg3 from '@/assets/img/blog-photo-3.jpg';
import articleImg4 from '@/assets/img/blog-photo-4.jpg';
import articleImg5 from '@/assets/img/blog-photo-5.jpg';
import articleImg6 from '@/assets/img/blog-photo-6.jpg';

export default {
  name: 'App',
  components: {
    BlogDetailsPage,
    BlogPage,
    IndexPage,
    ProjectPage,
  },
  data: () => ({
    currentPage: 0,
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
};
</script>

<style lang="scss">
@import "@/assets/styles/normalize.css";
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

html {
  height: 100%;
}

body {
  font-family: $font-family-text;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
}

.bg-line {
  position: absolute;
  top: -10px;
  background: #E6E6E6;
  border: none;
  outline: none;
  min-height: 100%;
  width: 1px;
  z-index: -10;
  box-sizing: border-box;

  &:first-of-type {
    left: $boundary-position-bg-line;
  }

  &:nth-child(2) {
    left: calc($boundary-position-bg-line + 400px);
  }

  &:nth-child(3) {
    right: calc($boundary-position-bg-line + 400px);
  }

  &:last-of-type {
    right: $boundary-position-bg-line;
  }
}

.center {
  padding-left: calc(50% - $site-half-width);
  padding-right: calc(50% - $site-half-width);
}

.container {
  max-width: $site-width;
  margin: 0 auto;
}

.mt30 {
  margin: 30px 0 0;
}

.mt21 {
  margin: 21px 0 0;
}

.mt46 {
  margin: 46px 0 0;
}

.mtb46 {
  margin: 46px 0;
}

.flexbox-jcsb {
  display: flex;
  justify-content: space-between;
}

  // for linter error without content in anchor
.hide {
  display: none;
  visibility: hidden;
  position: absolute;
}
</style>
