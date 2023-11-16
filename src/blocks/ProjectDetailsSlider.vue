<template>
    <div>
    <ProjectDetailsSliderItem :item="articles[choosenSlide]"/>
    <div class="slider-pagination mb108">
        <button
            class="slider-pagination__item"
            :class="{'slider-pagination__item_active': isActiveSlide(index)}"
            v-for="(_,index) in buttonCount"
            :key="index"
            @click="changeSlide(index)"></button>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectDetailsSliderItem from '@/blocks/ProjectDetailsSliderItem.vue';

export default {
  name: 'ProjectDetailsSlider',
  components: { ProjectDetailsSliderItem },
  data() {
    return {
      choosenSlide: 0,
    };
  },
  methods: {
    changeSlide(index) {
      if (index >= this.articles.length) {
        this.choosenSlide = this.articles.length - 1;
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
    ...mapGetters('articles', ['blogArticles']),
    buttonCount() {
      return this.articles.length;
    },
    articles() {
      return this.blogArticles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.slider-pagination {
    display: flex;
    justify-content: center;
    gap: 5px;
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
