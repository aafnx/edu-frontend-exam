<template>
  <div class="our-project center">
    <ProjectHeader />
    <section class="grid-box">
      <ProjectCard
        v-for="(data, index) in projectCardsData" :key="index"
        :cardData="{data, index}"
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
        img: {
          src: img1,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        img: {
          src: img2,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        img: {
          src: img3,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
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
  grid-template: auto / repeat(2, minmax(auto, 548px));
  column-gap: 104px;
  row-gap: 56px;
}
</style>
