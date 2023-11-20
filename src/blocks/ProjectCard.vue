<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <article class="project-card" :class="classCardProjectPage">
    <div class="project-card__img-box">
      <img :src="cardData.img.src" alt="project"
          class="project-card__img"
          :class="classCardIndexPage"
      >
    </div>
    <div class="project-card__wrapper">
      <header class="project-card__header">
        <h3 class="project-card__heading">{{ cardData.title }}</h3>
        <p class="project-card__type">
          {{ cardData.type }}
        </p>
      </header>
      <router-link to="/project-details" class="project-card__btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
          <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </router-link>
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
    page: {
      type: String,
      default: 'Index',
    },
  },
  computed: {
    classCardIndexPage() {
      if (this.page !== 'Index') {
        return '';
      }
      switch (this.cardData.id) {
        case 1: {
          return 'project-card__img_border-top-right';
        }
        case 2: {
          return 'project-card__img_border-top-left';
        }
        case 3: {
          return 'project-card__img_border-bottom-right';
        }
        case 4: {
          return 'project-card__img_border-bottom-left';
        }
        default: {
          return '';
        }
      }
    },
    classCardProjectPage() {
      if (this.page !== 'Project') {
        return '';
      }
      return 'project-card_project-page';
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
  box-sizing: border-box;

  &_project-page {
    grid-row: span 2;

    &:nth-child(1), &:nth-child(3), &:nth-child(5) {
      grid-row: span 3;
      & .project-card__img-box {
        height: 925px;
      }
    }
  }

  &__img-box {
      height: 552px;
  }

  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    display: block;

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
