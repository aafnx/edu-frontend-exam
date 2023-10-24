<script>
import PageHeader from '@/blocks/PageHeader.vue';
import PageFooter from '@/blocks/PageFooter.vue';

export default {
  name: 'BlogPage',
  components: {
    PageHeader,
    PageFooter,
  },
  props: {
    changePage: Function,
  },
};
</script>

<template>
  <div>
    <PageHeader :changePage="changePage" />
    <PageFooter :changePage="changePage"/>
  </div>
</template>

<style scoped lang="scss">

</style>
