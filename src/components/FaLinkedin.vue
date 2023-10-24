<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLinkedinIn);
Vue.component('font-awesome-icon', FontAwesomeIcon);
export default {
  name: 'FaLinkedin',
};
</script>
<template>
  <a href="https://linkedin.com" target="_blank" class="footer-logo__socials-link">
    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
    <span class="hide">linkedin</span>
  </a>
</template>

<style scoped lang="scss">
</style>
