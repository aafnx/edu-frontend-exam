<script>
import PageHeader from '@/blocks/PageHeader.vue';
import MainPageBanner from '@/blocks/MainPageBanner.vue';
import ProjectCardList from '@/blocks/ProjectCardList.vue';
import ExperienceComponent from '@/blocks/ExperienceComponent.vue';
import MainPageBlog from '@/blocks/MainPageBlog.vue';
import PageFooter from '@/blocks/PageFooter.vue';

export default {
  name: 'IndexPage',
  props: {
    changePage: Function,
    articles: {
      type: Array,
      required: true,
    },
  },
  components: {
    PageHeader,
    MainPageBanner,
    ProjectCardList,
    ExperienceComponent,
    MainPageBlog,
    PageFooter,
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
      <PageHeader :changePage="changePage"/>
      <MainPageBanner />
      <ProjectCardList />
      <ExperienceComponent />
      <MainPageBlog :articles="articles" />
    </div>
    <PageFooter :changePage="changePage"/>
  </div>
</template>

<style scoped>

</style>
