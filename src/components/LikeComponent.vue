<template>
  <button
    @click="toggleLike(id)"
    class="button"
    :class="{ 'liked' : isLiked }"
  >
  <FaLike class="like" />
  </button>
</template>

<script>
import FaLike from '@/components/FaLike.vue';

export default {
  name: 'LikeComponent',
  components: { FaLike },
  props: {
    id: Number,
    isLiked: Boolean,
    mutateLike: Function,
  },
  methods: {
    toggleLike(id) {
      this.mutateLike(id);
    },
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.button {
  display: block;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 50px;
}

.like {
  color: rgba(0, 0, 0, 0.6);
  height: 40px;
  width: 40px;
  transition: color 0.3s;
}

.liked {
  opacity: 1 !important;
  & > .like {
    color: gold;
  }
  &:hover > .like {
    color: goldenrod;
  }
}
</style>
