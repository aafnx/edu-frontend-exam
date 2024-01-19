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
            v-for="card in shownItems" :key="card.id"
            :cardData="card"
            :page="pageName"
            :enableLikes="true"
            :mutateLike="mutateLike"
          />
        </section>
        <PagePagination
          :items="filteredCardsByCategory"
          :itemsPerPage="itemsPerPage"
          @showItems="showItems"/>
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import { mapGetters, mapMutations } from 'vuex';
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
      itemsPerPage: 6,
      shownItems: [],
    };
  },
  methods: {
    ...mapMutations('projectCards', ['CHANGE_PROJECT_ACTIVE_CATEGORY', 'TOGGLE_LIKE']),
    changeCategory(data) {
      this.CHANGE_PROJECT_ACTIVE_CATEGORY(data);
      setTimeout(() => {
        this.$el.querySelector('.page-pagination').firstChild.dispatchEvent(new Event('click'));
      }, 0);
    },
    showItems(items) {
      this.shownItems = items;
    },
    mutateLike(id) {
      this.TOGGLE_LIKE(id);
    },
  },
  computed: {
    ...mapGetters('projectCards', ['cards', 'filteredCardsByCategory']),
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
