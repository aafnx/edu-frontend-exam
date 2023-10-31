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
          @choseCategory="choseCategory"
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
import BannerPage from '@/blocks/BannerPage.vue';
import PageFooter from '@/blocks/PageFooter.vue';
import PageHeader from '@/blocks/PageHeader.vue';
import PagePagination from '@/blocks/PagePagination.vue';
import ProjectCategories from '@/blocks/ProjectCategories.vue';
import ProjectCard from '@/blocks/ProjectCard.vue';

import img1 from '@/assets/img/project-card-1.jpg';
import img2 from '@/assets/img/project-card-2.jpg';
import img3 from '@/assets/img/project-card-3.jpg';
import img4 from '@/assets/img/project-card-4.jpg';
import img5 from '@/assets/img/project-card-5.jpg';
import img6 from '@/assets/img/project-card-6.jpg';
import img7 from '@/assets/img/project-card-7.jpg';
import img8 from '@/assets/img/project-card-8.jpg';

import bathroomImg1 from '@/assets/img/bathroom-1.jpg';
import bathroomImg2 from '@/assets/img/bathroom-2.jpg';
import bathroomImg3 from '@/assets/img/bathroom-3.jpg';
import bathroomImg4 from '@/assets/img/bathroom-4.jpg';
import bathroomImg5 from '@/assets/img/bathroom-5.jpg';

import kitchanImg1 from '@/assets/img/kitchan-1.jpg';
import kitchanImg2 from '@/assets/img/kitchan-2.jpg';
import kitchanImg3 from '@/assets/img/kitchan-3.jpg';
import kitchanImg4 from '@/assets/img/kitchan-4.jpg';

import livingAreaImg1 from '@/assets/img/living-area-1.jpg';
import livingAreaImg2 from '@/assets/img/living-area-2.jpg';
import livingAreaImg3 from '@/assets/img/living-area-3.jpg';
import livingAreaImg4 from '@/assets/img/living-area-4.jpg';
import livingAreaImg5 from '@/assets/img/living-area-5.jpg';
import livingAreaImg6 from '@/assets/img/living-area-6.jpg';

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
      cards: [
        {
          category: 'bathroom',
          isActive: false,
          data: [
            {
              id: 1,
              title: 'Minimal bathroom',
              type: 'Decor / Bathrom',
              img: { src: bathroomImg1 },
            },
            {
              id: 2,
              title: 'Glass bathroom',
              type: 'Decor / Bathrom',
              img: { src: bathroomImg2 },
            },
            {
              id: 3,
              title: 'Wooden bathroom',
              type: 'Decor / Bathrom',
              img: { src: bathroomImg3 },
            },
            {
              id: 4,
              title: 'Black bathroom',
              type: 'Decor / Bathrom',
              img: { src: bathroomImg4 },
            },
            {
              id: 5,
              title: 'Green bathroom',
              type: 'Decor / Bathrom',
              img: { src: bathroomImg5 },
            },
          ],
        },
        {
          category: 'bed room',
          isActive: true,
          data: [
            {
              id: 1,
              title: 'Minimal Bedroom',
              type: 'Decor / Artchitecture',
              img: { src: img1 },
            },
            {
              id: 2,
              title: 'Minimal Bedroom',
              type: 'Decor / Artchitecture',
              img: { src: img2 },
            },
            {
              id: 3,
              title: 'Classic Minimal Bedroom',
              type: 'Decor / Artchitecture',
              img: { src: img3 },
            },
            {
              id: 4,
              title: 'Modern Bedroom',
              type: 'Decor / Artchitecture',
              img: { src: img4 },
            },
            {
              id: 5,
              title: 'Minimal Bedroom table',
              type: 'Decor / Artchitecture',
              img: { src: img5 },
            },
            {
              id: 6,
              title: 'System Table',
              type: 'Decor / Artchitecture',
              img: { src: img6 },
            },
            {
              id: 7,
              title: 'Modern Medroom',
              type: 'Decor / Artchitecture',
              img: { src: img7 },
            },
            {
              id: 8,
              title: 'Another Modern Medroom',
              type: 'Decor / Artchitecture',
              img: { src: img8 },
            },
          ],
        },
        {
          category: 'kitchan',
          isActive: false,
          data: [
            {
              id: 1,
              title: 'White Kitchan',
              type: 'Decor / Kitchan',
              img: { src: kitchanImg1 },
            },
            {
              id: 2,
              title: 'Black Kitchan',
              type: 'Decor / Kitchan',
              img: { src: kitchanImg2 },
            },
            {
              id: 3,
              title: 'Green Kitchan',
              type: 'Decor / Kitchan',
              img: { src: kitchanImg3 },
            },
            {
              id: 4,
              title: 'Blue Kitchan',
              type: 'Decor / Kitchan',
              img: { src: kitchanImg4 },
            },
          ],
        },
        {
          category: 'living area',
          isActive: false,
          data: [
            {
              id: 1,
              title: 'Art Living Room',
              type: 'Decor / Living Room',
              img: { src: livingAreaImg1 },
            },
            {
              id: 2,
              title: 'Black Living Room',
              type: 'Decor / Living Room',
              img: { src: livingAreaImg2 },
            },
            {
              id: 3,
              title: 'Orange Living Room',
              type: 'Decor / Living Room',
              img: { src: livingAreaImg3 },
            },
            {
              id: 4,
              title: 'Green Living Room',
              type: 'Decor / Living Room',
              img: { src: livingAreaImg4 },
            },
            {
              id: 5,
              title: 'Rich Living Room',
              type: 'Decor / Living Room',
              img: { src: livingAreaImg5 },
            },
            {
              id: 6,
              title: 'Minimal Living Room',
              type: 'Decor / Living Room',
              img: { src: livingAreaImg6 },
            },
          ],
        },
      ],
    };
  },
  methods: {
    choseCategory(data) {
      const chosenCategory = this.cards.find((card) => card.category === data.category);
      if (chosenCategory) {
        // eslint-disable-next-line no-param-reassign
        this.cards.forEach((card) => { card.isActive = false; });
        chosenCategory.isActive = true;
      }
    },
  },
  computed: {
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
  // grid-template-rows: repeat(auto-fit, 616px);
  column-gap: 30px;
  row-gap: 35px;
  grid-auto-flow: row dense;
  justify-content: space-between;
  align-items: start;
  box-sizing: border-box;

}
</style>
