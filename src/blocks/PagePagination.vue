<template>
  <nav class="page-pagination">
    <PaginationItem v-for="page in numberOfPages" :key="page" :pageNumber="page" />
    <PaginationItem  :isLastItem="true"/>
  </nav>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
  name: 'PagePagination',
  components: { PaginationItem },
  props: {
    numberOfPages: Number,
  },
};
</script>

<style lang="scss" scoped>
.page-pagination {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 51px 0 0;
}
</style>
