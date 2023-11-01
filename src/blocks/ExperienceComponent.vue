<script>
export default {
  name: 'ExperienceComponent',
};
</script>

<template>
  <article class="our-experience center">
    <div class="experience-card">
      <p class="experience-card__number">12</p>
      <p class="experience-card__text">Years Of Experiance</p>
    </div>
    <div class="experience-card">
      <p class="experience-card__number">85</p>
      <p class="experience-card__text">Success Project</p>
    </div>
    <div class="experience-card">
      <p class="experience-card__number">15</p>
      <p class="experience-card__text">Active Project</p>
    </div>
    <div class="experience-card">
      <p class="experience-card__number">95</p>
      <p class="experience-card__text">Happy Customers</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.our-experience {
  min-height: 457px;
  background-color: $experience-block-bgc;
  margin: 0 0 96px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 76px;
}

.experience-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-right: 1px solid $accent-color;
  padding: 0 54px 0 0;
  height: 130px;

  &:last-child {
    border-right: none;
    padding: 0;
  }

  &__number {
    @include font($font-family-heading, $accent-color);
    font-size: 85px;
    letter-spacing: 1.7px;
    margin: 0;
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 0;
  }
}
</style>
