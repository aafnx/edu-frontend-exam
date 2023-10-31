<template>
  <div>
    <div class="wrapper">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <PageHeader />
      <BannerPage :bannerData="bannerData" />
      <main class="center">
        <nav class="categories">
          <button>Bathroom</button>
          <button>Bed Room</button>
          <button>Kitchan</button>
          <button>Living Area</button>
        </nav>
        <section class="cards">
          <article class="card">
            <img src="@/assets/img/project-card-1.jpg" alt="" class="img">
            <h3 class="title">Minimal Bedroom</h3>
            <p class="type">Decor / Artchitecture</p>
            <button class="more-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
          </article>
        </section>
        <PagePagination :numberOfPages="3" />
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import BannerPage from '@/blocks/BannerPage.vue';
import PageFooter from '@/blocks/PageFooter.vue';
import PageHeader from '@/blocks/PageHeader.vue';
import PagePagination from '@/blocks/PagePagination.vue';

export default {
  name: 'ProjectPage',
  components: {
    PageHeader, PageFooter, BannerPage, PagePagination,
  },
  data() {
    return {
      bannerData: {
        title: 'Our Project',
        subtitle: 'Home / Project',
        pageName: 'project',
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
