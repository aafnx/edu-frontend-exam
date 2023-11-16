<template>
    <div class="center">
    <section class="section">
        <article class="article">
            <h3 class="header">
                Minimal Look Bedrooms
            </h3>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem in dolor ut hic. Odit explicabo non unde
                atque debitis doloremque quibusdam id quisquam nesciunt ut
                voluptas modi aperiam nihil, aut at facilis praesentium
                veniam. Facere earum ullam voluptas error qui temporibus in.
                Non consectetur quam, ad minima est incidunt a similique
                mollitia saepe debitis facere laudantium hic placeat
                voluptates odit laborum magni, maiores eligendi vel soluta
                reprehenderit. Ipsum aliquid saepe iste laudantium. Eos esse
                consectetur quas inventore nihil laborum id fuga doloremque
                sit officiis nam tempora voluptas repellat, aliquid maiores
                natus repudiandae iusto dolore eligendi vel autem. Dignissimos, eius itaque?
            </p>
        </article>
        <div class="img-box">
            <img src="@/assets/img/article-img-3.jpg" alt="img">
            <button class="zoom-btn">ZOOM</button>
        </div>
        <div class="popup-img-box">
            test
        </div>
    </section>
    <div class="slider-pagination mb108">
        <button class="slider-pagination__item slider-pagination__item_active"></button>
        <button class="slider-pagination__item"></button>
        <button class="slider-pagination__item"></button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectDetailsSlider',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.popup-img-box {
    background-color: $bg-image-color;
    position: absolute;
    width: 98vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 50;
    // overflow: hidden;
    // display: none;
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
}

.img-box {
    max-width: 1200px;
    height: 799px;
    background-color: $bg-image-color;
    border-radius: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.img {
    display: block;
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
    background-color: #fff;
    filter: drop-shadow(0 10px 20px rgba(192, 192, 192, 0.25));
}

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
