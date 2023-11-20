<template>
    <div class="wrapper">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <hr class="bg-line">
      <PageHeader />
      <div class="banner">
        <div class="info-box">
          <div class="info-header">404</div>
          <div class="info-text">We are sorry, but the page you requested was not found</div>
          <router-link to="/home" class="info-btn">
            Back to Home
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                  stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"
            /></svg>
          </router-link>
        </div>
        <img class="img" :src="NotFoundImg" alt="Page Not found">
      </div>
    </div>
</template>
<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import PageHeader from '@/blocks/PageHeader.vue';
import NotFoundImg from '@/assets/img/Not-found-page-img.jpg';

export default {
  name: 'NotFound',
  components: { PageHeader },
  data() {
    return {
      NotFoundImg,
    };
  },

};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.banner {
  margin: 45px 0 0;
  display: flex;
  gap: 100px;
  align-items: center;
}

.info-box {
  padding-left: calc(50% - $site-half-width);
  max-width: 569px
}

.info-header {
  @include font($font-family-heading, $accent-color);
  font-size: 250px;
  line-height: 312px;
}

.info-text {
  @include font($font-family-text, $font-color-heading);
  font-size: 35px;
  letter-spacing: 0.35px;
  line-height: 52px;
  margin: 0 0 23px;
}

.info-btn {
    display: inline-flex;
    text-decoration: none;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.36px;
    padding: 26px 54px;
    background-color: $font-color-heading;
    border-radius: 18px;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
    transition: all 0.3s;

    &:hover {
      background-color: $accent-color;
    }

    &:hover svg path {
      stroke: $font-color-heading;
    }
}

.img {
  display: block;
  border-radius: 0px 0px 0px 353px;
  width: 100%;
  max-height: 1088px;
  object-fit: cover;

}
</style>
