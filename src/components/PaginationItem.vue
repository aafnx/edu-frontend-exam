<template>
  <button v-if="!isLastItem" @click="$emit('changePage')"
    class="page-pagination__item"
    :class="{ 'page-pagination__item_active' : isActive }">

    <span class="page-pagination__number" v-if="!isLastItem">{{ pageNumber }}</span>

    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
      <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
    </svg>
  </button>

  <router-link v-else :to="route" class="page-pagination__item">
  <span class="page-pagination__number">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
        <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
          stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
      </svg>
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
      <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
    </svg>
  </router-link>
</template>

<script>
export default {
  name: 'PaginationItem',
  props: {
    pageNumber: Number,
    isActive: Boolean,
    isLastItem: Boolean,
    route: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.page-pagination__item {
    position: relative;
    display: block;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    width: 52px;
    height: 52px;
    @include go-to-page-btn;

    & svg {
      width: inherit;
      height: inherit;
    }

    &_active svg circle {
      fill: $experience-block-bgc;
      stroke: none;
    }
}
.page-pagination__number {
    position: absolute;
    top: 18px;
    left: 22px;
}
</style>
