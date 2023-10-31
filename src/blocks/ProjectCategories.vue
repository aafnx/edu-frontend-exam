<template>
    <nav class="categories">
      <button class="button" :class="{'button_active': category.isActive}"
        v-for="(category, index) in categories" :key="index"
        @click="choseCategory(category)">
          {{ category.category }}
      </button>
    </nav>
</template>

<script>
export default {
  name: 'ProjectCategories',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    choseCategory(category) {
      this.$emit('choseCategory', category);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.categories {
  border-radius: 18px;
  border: 1px solid $accent-color;
  display: flex;
  width: 880px;
  gap: 10px;
  margin: 0 auto;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
}
.button {
  @include font($font-family-text, $font-color-heading);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 22.5px;
  letter-spacing: 0.36px;
  text-transform: capitalize;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  padding: 26px;
  display: block;
  border-radius: 18px;
  width: 219px;

  &:hover {
    background: rgb(222, 222, 222);
  }

  &_active {
    color: white;
    background: $accent-color;
    &:hover {
      background: $accent-color;
    }
  }
}
</style>
