<template>
<section class="section center">
    <article class="article">
        <h3 class="header">
            {{ item.title }}
        </h3>
        <p class="text"
            v-for="(text, index) in item.paragraphs"
            :key="index">
            {{ text }}
        </p>
    </article>
    <div class="img-box">
        <img class="img" :src="item.img.src" :alt="item.img.alt">
        <button
            class="zoom-btn"
            @click="showPopUp">
          ZOOM
        </button>
    </div>
    <PopUpImage
      @hidePopUp="hidePopUp"
      :isShown="isShownPopUp"
      :img="item.img" />
</section>

</template>

<script>
import PopUpImage from './PopUpImage.vue';

export default {
  name: 'ProjectDetailsSliderItem',
  components: { PopUpImage },
  data() {
    return {
      isShownPopUp: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showPopUp() {
      this.isShownPopUp = true;
    },
    hidePopUp() {
      this.isShownPopUp = false;
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

.img-box {
    max-width: 1200px;
    height: 799px;
    background-color: $bg-image-color;
    border-radius: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    &:hover .zoom-btn {
      opacity: 1;
    }
}

.img {
    border-radius: 70px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.zoom-btn {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    outline: none;
    border: none;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #fff;
    filter: drop-shadow(0 10px 20px rgba(192, 192, 192, 0.25));
    transition: opacity .3s;
}
</style>
