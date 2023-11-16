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
import { mapGetters } from 'vuex';
import ProjectHeader from '@/blocks/ProjectHeader.vue';
import ProjectCard from '@/blocks/ProjectCard.vue';

export default {
  name: 'ProjectCardList',
  components: {
    ProjectHeader,
    ProjectCard,
  },
  computed: {
    ...mapGetters('projectCards', ['projectCardsData']),
  },
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
