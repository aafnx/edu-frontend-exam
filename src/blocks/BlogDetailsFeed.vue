<template>
  <section class="blog-details">
    <section class="blog-details__wrapper">
      <BlogDetailsArticle
        v-for="(article, index) in filteredArticles" :key="index"
        :articleData="article"
      />
      <article class="quotes">
        <div class="quotes__symbol">&#8221;</div>
        <p class="quotes__text">The details are not the details. They make the design.</p>
      </article>
      <article class="article">
        <h3 class="article__title">
          Design sprints are great
        </h3>
        <p class="article__text mt21">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered.
        </p>
        <ol class="article__list">
          <li class="article__list-item">
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered.
          </li>
          <li class="article__list-item">
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered.
          </li>
          <li class="article__list-item">
            Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.
          </li>
        </ol>
        <img src="@/assets/img/sub-article.jpg" alt="subarticle img"
             class="article__img article__img_subarticle mt21">
        <p class="article__text mt46">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered.
        </p>
      </article>
    </section>
    <aside class="tags">
      <h3 class="tags__heading">
        Tags
      </h3>
      <div class="tags__wrapper">
        <button class="tag"
                v-for="(btn, index) in buttonTags" :key="index"
                @click="toggleTag(btn)"
                :class="{ tag_active: btn.isActive  }">
          {{ btn.name }}
        </button>
      </div>
    </aside>
  </section>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import { mapGetters } from 'vuex';
import BlogDetailsArticle from '@/blocks/BlogDetailsArticle.vue';

export default {
  name: 'BlogDetailsFeed',
  components: {
    BlogDetailsArticle,
  },
  data() {
    return {
      buttonTags: [
        {
          name: 'Kitchen',
          isActive: false,
          disable() {
            this.isActive = false;
          },
          enable() {
            this.isActive = true;
          },
        },
        {
          name: 'Bedroom',
          isActive: false,
          disable() {
            this.isActive = false;
          },
          enable() {
            this.isActive = true;
          },
        },
        {
          name: 'Building',
          isActive: false,
          disable() {
            this.isActive = false;
          },
          enable() {
            this.isActive = true;
          },
        },
        {
          name: 'Architecture',
          isActive: false,
          disable() {
            this.isActive = false;
          },
          enable() {
            this.isActive = true;
          },
        },
        {
          name: 'Kitchen Planning',
          isActive: false,
          disable() {
            this.isActive = false;
          },
          enable() {
            this.isActive = true;
          },
        },
        {
          name: 'Bedroom',
          isActive: false,
          disable() {
            this.isActive = false;
          },
          enable() {
            this.isActive = true;
          },
        },
      ],
      tag: '',
    };
  },
  methods: {
    toggleTag(btn) {
      if (btn.isActive) {
        this.tag = '';
        btn.disable();
      } else {
        this.tag = btn.name;
        this.buttonTags.forEach((el) => el.disable());
        btn.enable();
      }
    },
  },
  computed: {
    ...mapGetters('articles', ['blogArticles']),
    filteredArticles() {
      if (this.tag) {
        return [...this.blogArticles].filter((item) => item.tags.includes(this.tag.toLowerCase()));
      }
      return [...this.blogArticles];
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.blog-details {
  margin: 200px 0 0;
  display: flex;
  justify-content: center;
  gap: 52px;

  &__wrapper {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}

.article {
  &__title {
    @include font($font-family-heading, $font-color-heading);
    font-size: 50px;
    line-height: 62px;
    letter-spacing: 1px;
  }

  &__img {
    display: block;
    height: 540px;
    width: 100%;
    border-radius: 50px;

    &_subarticle {
      height: 365px;
    }
  }

  &__date {
    @include font($font-family-text, $font-color-text);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }

  &__pagination {
    @extend .article__date;
  }

  &__text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 15px 0 0;
  }

  &__list {
    @extend .article__text;
    list-style-position: outside;
    padding: 0 0 0 30px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 24px 0 44px 0;
  }

  &__list-item::marker {
    @include font($font-family-heading, $accent-color);
  }
}

.quotes {
  display: flex;
  padding: 53px 220px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: $experience-block-bgc;

  &__symbol {
    @include font($font-family-heading, $accent-color);
    text-align: center;
    font-size: 200px;
    letter-spacing: 4px;
    margin: -35px 0 0;
  }

  &__text {
    @extend .quotes__symbol;
    font-size: 25px;
    font-style: italic;
    letter-spacing: 0.5px;
    margin: -125px 0 0;
  }
}

.tags {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 345px;

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    font-size: 25px;
    line-height: 31px;
    letter-spacing: 0.5px;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}

.tag {
  @include font($font-family-text, $font-color-heading);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 30px;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.36px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: $experience-block-bgc;
  transition: all 0.3s;

  &:hover {
    background: $accent-color;
  }

  &_active {
    color: #FFF;
    background: $font-color-heading;

    &:hover {
      background: $font-color-text;
    }
  }
}
</style>
