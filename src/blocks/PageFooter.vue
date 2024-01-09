<template>
  <footer class="footer center">
    <div class="footer-logo">
      <LogoComponent />
      <p class="footer-logo__text">
        It is a long established fact that a reader will be distracted lookings.
      </p>
      <div class="footer-logo__socials">
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
    <nav class="footer-nav">
      <h4 class="footer-nav__heading">Pages</h4>
      <a href="index.html" class="footer-nav__link">Home</a>
      <a href="#" class="footer-nav__link">Project</a>
      <a href="blog.html" class="footer-nav__link">Blog</a>
    </nav>
    <div class="footer-services"></div>
    <address class="footer-contacts">
      <h4 class="footer-contacts__heading">Contact</h4>
      <a href="https://www.google.com/maps/search/55+East+Birchwood+Ave.+Brooklyn,+New+York+11201/@40.6970925,-73.9979383,15z/data=!3m1!4b1?entry=ttu"
         target="_blank" class="footer-contacts__address">
        55 East Birchwood Ave. Brooklyn, New York 11201
      </a>
      <a href="mailto:contact@interno.com" class="footer-contacts__email">contact@interno.com</a>
      <a href="tel:1234567890" class="footer-contacts__phone">(123) 456 - 7890</a>
    </address>
  </footer>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<script>
import LogoComponent from '@/components/LogoComponent.vue';
import FaTwitter from '@/components/FaTwitter.vue';
import FaLinkedin from '@/components/FaLinkedin.vue';

export default {
  name: 'PageFooter',
  components: {
    LogoComponent,
    FaTwitter,
    FaLinkedin,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.footer {
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 96px 0 134px 0;
  display: flex;
  justify-content: space-between;
  gap: 101px;

  &-blog-page {
    margin: 200px 0 134px;
  }
}

.footer-logo {
  max-width: 393px;

  &__text {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin: 18px 0 31px 0;
  }

  &__socials {
    display: flex;
    gap: 55px;

    &-link {
      color: $font-color-heading;
      text-align: center;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.99px;
      text-transform: uppercase;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: $accent-color;
      }
    }
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 125px;

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    font-size: 25px;
    line-height: 31px;
    margin: 0;
  }

  &__link {
    display: block;
    text-decoration: none;
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    letter-spacing: 0.22px;
    transition: color 0.3s;

    &:hover {
      color: $accent-color;
    }
  }
}

.footer-services {
  width: 120px;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 258px;

  &__heading {
    @include font($font-family-heading, $font-color-heading);
    font-size: 25px;
    line-height: 31px;
    margin: 0;
  }

  &__address {
    @include font($font-family-text, $font-color-text);
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: $accent-color;
    }
  }

  &__email {
    @extend .footer-contacts__address;
  }

  &__phone {
    @extend .footer-contacts__email;
  }
}
</style>
