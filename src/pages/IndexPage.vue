<script>
import PageHeader from '@/blocks/PageHeader.vue';
import MainPageBanner from '@/blocks/MainPageBanner.vue';
import ProjectCardList from '@/blocks/ProjectCardList.vue';
import ExperienceComponent from '@/blocks/ExperienceComponent.vue';
import MainPageBlog from '@/blocks/MainPageBlog.vue';
import PageFooter from '@/blocks/PageFooter.vue';

export default {
  name: 'IndexPage',
  components: {
    PageHeader,
    MainPageBanner,
    ProjectCardList,
    ExperienceComponent,
    MainPageBlog,
    PageFooter,
  },
};
// !TODO
// все ссылки на главной странице являются переходами на соответствующие
// страницы, например, при нажатии на Название проекта, мы попадаем в описание проекта;
</script>

<template>
  <div>
    <div class="wrapper">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <PageHeader />
      <MainPageBanner />
      <ProjectCardList />
      <ExperienceComponent />
      <MainPageBlog />
    </div>
    <PageFooter />
  </div>
</template>
