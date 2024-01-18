<template>
  <!-- Если только 1 страница для отображения, то пагинация скрывается  -->
  <nav class="page-pagination" v-show="numberOfPages > 1">
    <PaginationItem ref="paginationItems"
      v-for="page in numberOfPages" :key="page"
      :pageNumber="page"
      :isActive="currentPage === page"
      @changePage="changePage(page)"
    />
    <PaginationItem v-if="lastItem?.isNeed" :route="lastItem.route" :isLastItem="true"/>
  </nav>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
  name: 'PagePagination',
  components: { PaginationItem },
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    lastItem: {
      isNeed: Boolean,
      route: String,
    },
  },
  methods: {
    changePage(page) {
      if (page <= 0) this.currentPage = 1;
      if (page > this.numberOfPages) this.currentPage = this.numberOfPages;
      this.currentPage = page;

      this.$emit('showItems', this.shownItems);
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    maxIndexItems() {
      return this.currentPage * this.itemsPerPage;
    },
    minIndexItems() {
      return this.maxIndexItems - this.itemsPerPage;
    },
    shownItems() {
      return [...this.items].filter((_, idx) => idx >= this.minIndexItems && idx
        < this.maxIndexItems);
    },
  },
  mounted() {
    this.$children[0].$el.dispatchEvent(new Event('click'));
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
