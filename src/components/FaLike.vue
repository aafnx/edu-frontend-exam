<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faStar);
Vue.component('font-awesome-icon', FontAwesomeIcon);
export default {
  name: 'FaLike',
};
</script>

<template>
  <font-awesome-icon icon="fa-solid fa-star" />
</template>

<style scoped lang="scss">
path {
  stroke: gray;
  stroke-width: 10;
}
</style>
