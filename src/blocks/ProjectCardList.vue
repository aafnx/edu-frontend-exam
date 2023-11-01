<template>
  <div class="our-project center">
    <ProjectHeader />
    <section class="grid-box">
      <ProjectCard
        v-for="card in projectCardsData" :key="card.id"
        :cardData="card"
      />
    </section>
  </div>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import ProjectHeader from '@/blocks/ProjectHeader.vue';
import ProjectCard from '@/blocks/ProjectCard.vue';
import img1 from '@/assets/img/card-1.jpg';
import img2 from '@/assets/img/card-2.jpg';
import img3 from '@/assets/img/card-3.jpg';
import img4 from '@/assets/img/card-4.jpg';

export default {
  name: 'ProjectCardList',
  components: {
    ProjectHeader,
    ProjectCard,
  },
  data: () => ({
    projectCardsData: [
      {
        id: 1,
        img: {
          src: img1,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        id: 2,
        img: {
          src: img2,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        id: 3,
        img: {
          src: img3,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        id: 4,
        img: {
          src: img4,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">

.our-project {
  margin: 96px 0 100px;
  display: flex;
  flex-direction: column;
  gap: 93px;
}

.grid-box {
  display: grid;
  justify-content: center;
  grid-template: auto / repeat(2, minmax(auto, 552px));
  column-gap: 101px;
  row-gap: 56px;
}
</style>
