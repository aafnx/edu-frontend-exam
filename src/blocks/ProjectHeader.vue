<script>
export default {
  name: 'ProjectHeader',
};
</script>

<template>
  <header class="our-project__header">
    <h2 class="our-project__heading">
      Follow Our Projects
    </h2>
    <p class="our-project__text">
      It is a long established fact that a reader will be distracted by the of readable content
      of page lookings at its layouts points.
    </p>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.our-project {
  &__header {
    max-width: 737px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    text-align: center;
    font-size: 50px;
    line-height: 62px;
    letter-spacing: 1px;
    margin: 0;
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    text-align: center;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 0;
  }
}
</style>
