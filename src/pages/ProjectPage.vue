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
        <ProjectCategories
          :categories="cards"
          @changeCategory="changeCategory"
          class="categories"/>

        <section class="cards">
          <ProjectCard
            v-for="card in filteredCardsByCategory" :key="card.id"
            :cardData="card"
            :page="pageName"/>
        </section>
        <PagePagination :numberOfPages="3" />
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import { mapGetters } from 'vuex';
import BannerPage from '@/blocks/BannerPage.vue';
import PageFooter from '@/blocks/PageFooter.vue';
import PageHeader from '@/blocks/PageHeader.vue';
import PagePagination from '@/blocks/PagePagination.vue';
import ProjectCategories from '@/blocks/ProjectCategories.vue';
import ProjectCard from '@/blocks/ProjectCard.vue';

export default {
  name: 'ProjectPage',
  components: {
    PageHeader,
    PageFooter,
    BannerPage,
    PagePagination,
    ProjectCategories,
    ProjectCard,
  },
  data() {
    return {
      pageName: 'Project',
      bannerData: {
        title: 'Our Project',
        subtitle: 'Home / Project',
        pageName: 'project',
      },
    };
  },
  methods: {
    changeCategory(data) {
      const chosenCategory = this.cards.find((card) => card.category === data.category);
      if (chosenCategory) {
        // eslint-disable-next-line no-param-reassign
        this.cards.forEach((card) => { card.isActive = false; });
        chosenCategory.isActive = true;
      }
    },
  },
  computed: {
    ...mapGetters('projectCards', ['cards']),
    filteredCardsByCategory() {
      return this.cards.find((card) => card.isActive).data;
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 200px;
}

.cards {
  margin: 61px 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, 308px);
  column-gap: 30px;
  row-gap: 35px;
  grid-auto-flow: row dense;
  justify-content: space-between;
  align-items: start;
  box-sizing: border-box;

}
</style>
