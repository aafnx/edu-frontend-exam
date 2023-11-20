<template>
  <section class="blog-banner" :style="bannerBgImg">
    <div class="blog-banner__wrapper container">
      <header class="blog-banner__header"
        :class="{'blog-banner__header_none': hideHeaderBanner}">
        <h1 class="blog-banner__heading">{{ bannerData.title}}</h1>
        <p class="blog-banner__text">{{  bannerData.subtitle }}</p>
      </header>
    </div>
  </section>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import blogBgImg from '@/assets/img/blog-banner.jpg';
import projectBgImg from '@/assets/img/project-banner.jpg';
import projectDetailBgImg from '@/assets/img/project-details-banner.jpg';

export default {
  name: 'BannerPage',
  props: {
    bannerData: Object,
  },
  computed: {
    bannerBgImg() {
      switch (this.bannerData.pageName.toLowerCase()) {
        case 'blog': {
          return { backgroundImage: `url(${blogBgImg})` };
        }
        case 'project': {
          return { backgroundImage: `url(${projectBgImg})` };
        }
        case 'project details': {
          return { backgroundImage: `url(${projectDetailBgImg})` };
        }
        default: {
          return { backgroundColor: '#F4F0EC' };
        }
      }
    },
    hideHeaderBanner() {
      switch (this.bannerData.pageName.toLowerCase()) {
        case 'project details': {
          return true;
        }
        default: {
          return false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.blog-banner {
  background: center / cover no-repeat;

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
    &_none {
      display: none;
    }
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
</style>
