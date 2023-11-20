<template>
    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
    <div class="popup"
        v-if="isShown"
        @click="$emit('hidePopUp')">
        <img class="popup__img" :src="img.src" :alt="img.alt">
    </div>
</template>

<script>
export default {
  name: 'PopUpImage',
  props: {
    img: {
      type: Object,
      required: true,
    },
    isShown: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
