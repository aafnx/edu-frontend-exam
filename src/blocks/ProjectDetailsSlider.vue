<template>
    <section class="section center">
    <article class="article">
        <h3 class="header">
            {{ articleData.title }}
        </h3>
        <p class="text"
            v-for="(text, index) in articleData.paragraphs"
            :key="index">
            {{ text }}
        </p>
    </article>
    <ProjectDetailsSliderItem :img ="articleData.img[choosenSlide]"/>
    <div class="slider-pagination mb108">
        <button
            class="slider-pagination__item"
            :class="{'slider-pagination__item_active': isActiveSlide(index)}"
            v-for="(_,index) in buttonCount"
            :key="index"
            @click="changeSlide(index)"></button>
    </div>
    </section>
</template>

<script>
import ProjectDetailsSliderItem from '@/blocks/ProjectDetailsSliderItem.vue';

export default {
  name: 'ProjectDetailsSlider',
  components: { ProjectDetailsSliderItem },
  data() {
    return {
      choosenSlide: 0,
    };
  },
  props: {
    articleData: Object,
  },
  methods: {
    changeSlide(index) {
      if (index >= this.articleData.img.length) {
        this.choosenSlide = this.articleData.img.length - 1;
      }
      if (index < 0) {
        this.choosenSlide = 0;
      }
      this.choosenSlide = index;
    },
    isActiveSlide(index) {
      return this.choosenSlide === index;
    },
  },
  computed: {
    buttonCount() {
      return this.articleData.img.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.section {
    margin: 200px 0 20px;
}

.article {
    max-width: 658px;
    text-align:justify;
    margin: 0 auto 100px;
}

.header {
    @include font($font-family-heading, $font-color-heading);
    font-size: 50px;
    letter-spacing: 1px;
    line-height: 62px;
}

.text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    letter-spacing: 0.22px;
    line-height: 33px;
    margin: 0 0 20px;
}
.slider-pagination {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 30px;
    &__item {
        cursor: pointer;
        outline: none;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        transition: background-color .3s;
        &:hover {
            background-color: $bg-image-color;
        }
        &_active {
            background-color: $accent-color;
            &:hover {
                background-color: $accent-color;
            }
        }
    }
}

</style>
