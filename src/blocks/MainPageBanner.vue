<script>
export default {
  name: 'MainPageBanner',
};
</script>

<template>
  <section class="center">
    <div class="top-banner">
      <div class="top-banner__wrapper">
        <h3 class="top-banner__heading">
          Let Your Home Be Unique
        </h3>
        <p class="top-banner__text">
          There are many variations of the passages of lorem Ipsum fromavailable, majority.
        </p>
        <router-link to="/project" class="top-banner__btn">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                  stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.top-banner {
  position: relative;
  min-height: 758px;
  border-radius: 22px;
  background: url("../assets/img/top-banner.jpg") center no-repeat;

  &__wrapper {
    position: absolute;
    top: 208px;
    left: 50px;
    max-width: 434px;
  }

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    font-size: 65px;
    line-height: 81px;
    margin: 0;
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 20px 0;
  }

  &__btn {
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    text-decoration: none;
    align-items: center;
    gap: 10px;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.36px;
    padding: 26px 49px;
    background-color: $font-color-heading;
    border-radius: 18px;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
    transition: all 0.3s;

    & svg path {
      transition: stroke 0.3s;
    }

    &:hover {
      background-color: $accent-color;
    }

    &:hover svg path {
      stroke: $font-color-heading;
    }
  }
}
</style>
