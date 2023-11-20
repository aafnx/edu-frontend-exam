Vue.component("article-component", {
    props: ["articleData"],
    template: `
    <article class="article">
        <h3 class="article__title">
            {{ articleData.title }}
        </h3>
        <img :src="articleData.img.src" :alt="articleData.img.alt" class="article__img mt21">
        <div class="flexbox-jcsb mtb46">
            <time class="article__date"> {{ articleData.date }}</time>
            <div class="article__pagination">
                {{ articleData.pagination }}
            </div>
        </div>
        <p class="article__text" v-for="(text, index) in articleData.paragraphs" :key="index">
           {{ text }}
        </p>
    </article>
    `
})