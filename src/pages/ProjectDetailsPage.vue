<template>
  <div>
    <div class="wrapper">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <PageHeader />
      <BannerPage :bannerData="bannerData" />
      <ProjectDetailsSlider />
    </div>
    <PageFooter />
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import BannerPage from '@/blocks/BannerPage.vue';
import PageFooter from '@/blocks/PageFooter.vue';
import PageHeader from '@/blocks/PageHeader.vue';
import ProjectDetailsSlider from '@/blocks/ProjectDetailsSlider.vue';

export default {
  name: 'ProjectDetailsPage',
  components: {
    PageHeader,
    PageFooter,
    BannerPage,
    ProjectDetailsSlider,
  },
  data() {
    return {
      bannerData: {
        title: '',
        subtitle: '',
        pageName: 'project details',
      },
    };
  },
};
</script>
