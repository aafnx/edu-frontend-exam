<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTwitter);
Vue.component('font-awesome-icon', FontAwesomeIcon);
export default {
  name: 'FaTwitter',
};
</script>
<template>
  <a href="https://twitter.com" target="_blank" class="footer-logo__socials-link">
    <font-awesome-icon icon="fa-brands fa-twitter" />
    <span class="hide">twitter</span>
  </a>
</template>

<style scoped lang="scss">
</style>
