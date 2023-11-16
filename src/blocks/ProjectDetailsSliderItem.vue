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
        @click="onPopUp">ZOOM</button>
    </div>
    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
    <div v-if="isPopUp" class="popup"
        @click="offPopUp">
        <img class="popup__img" :src="item.img.src" :alt="item.img.alt">
    </div>
</section>

</template>

<script>
export default {
  name: 'ProjectDetailsSliderItem',
  data() {
    return {
      isPopUp: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onPopUp() {
      this.isPopUp = true;
    },
    offPopUp() {
      this.isPopUp = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.popup {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    &__img {
        width: 80%;
        height: 80%;
        object-fit: cover;
    }
}
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
}

.img {
    border-radius: 70px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.zoom-btn {
    position: absolute;
    cursor: pointer;
    outline: none;
    border: none;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #fff;
    filter: drop-shadow(0 10px 20px rgba(192, 192, 192, 0.25));
}
</style>
