<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <article class="project-card">
    <img :src="cardData.data.img.src" alt="project"
         class="project-card__img"
         :class="classForCard"
    >
    <div class="project-card__wrapper">
      <header class="project-card__header">
        <h3 class="project-card__heading">{{ cardData.data.title }}</h3>
        <p class="project-card__type">
          {{ cardData.data.type }}
        </p>
      </header>
      <a href="#" class="project-card__btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
          <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </article>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>

export default {
  name: 'ProjectCard',
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classForCard() {
      if (this.cardData.index === 0) {
        return 'project-card__img_border-top-right';
      }
      if (this.cardData.index === 1) {
        return 'project-card__img_border-top-left';
      }
      if (this.cardData.index === 2) {
        return 'project-card__img_border-bottom-right';
      }
      if (this.cardData.index === 3) {
        return 'project-card__img_border-bottom-left';
      }
      return '';
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.project-card {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__img {
    height: 525px;

    &_border-top-right {
      border-radius: 0 $project-card-border-radius 0 0;
    }

    &_border-bottom-right {
      border-radius: 0 0 $project-card-border-radius 0;
    }

    &_border-top-left {
      border-radius: $project-card-border-radius 0 0 0;
    }

    &_border-bottom-left {
      border-radius: 0 0 0 $project-card-border-radius;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    font-size: 25px;
    line-height: 31px;
    letter-spacing: 0.5px;
    margin: 0;
  }

  &__type {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 0;
  }

  &__btn {
    @include go-to-page-btn;
  }
}
</style>
